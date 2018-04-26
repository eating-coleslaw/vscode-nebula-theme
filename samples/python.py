import urllib2  # html scraper
from bs4 import BeautifulSoup  # html parser
import re  # regex module
from collections import deque  # keep track of urls to scrape & parse
import heapq

import sys  # exit quits program prematurely in event of error
import sqlite3  # allows interaction with sql database (henceforth db)
import datetime  # strptime and strftime convert between date formats
import time  # sleep allows slight pause after each request to bandcamp servers
import numpy  # random.exponential determines variable sleep time between server
#  requests (more human-like according to p4k master comment)
import itertools  # count function is convenient iterator


'''Script Sequence:
    1. go to music page of the source band
    2. get tags and tag counts from all albums on music page
    3. for given tag, get band page for all artists listed
        4. repeat step 3 for all reference band tags
    5. for given session artist, get go through all albums counting tags
        6. repeat step 5 for all session artists
    7. move information to database with (id, artist, tag, tag count)
    8. sort database based on tag count'''


SOURCE_URL = "spazzkid.bandcamp.com"  # will become main program input
URL_QUEUE = deque([])
TAG_QUEUE = deque([])
OPENER = urllib2.build_opener()
OPENER.addheaders = [('User-agent', 'Mozilla/5.0')]
MAX_TAG_PAGES = 1
MAX_ALBUMS = 5
SOURCE_TAGS = []


def main():
    SOURCE_URL
    URL_QUEUE = deque([])
    TAG_QUEUE = deque([])
    SOURCE_TAGS = []
    pass


def prepare_source_band_url(url):
    """Cleans the user-input source url and turns it into a music page url."""
    # check to ensure bandcamp.com link
    bandcamp_check = re.compile('(.*)(bandcamp\.com)(.*)$')
    if bandcamp_check.match(url) != None:
        clean_url = check_url_protocol(get_clean_band_url(url))
        return make_music_page_url(clean_url)
    else:
        print '%s is not a bandcamp.com URL.' % url


def make_music_page_url(url):
    if re.compile('/music').match(url) == None:
        return url + '/music'
    else:
        return url


def check_url_protocol(url):
    """Ensures a given url has the http:// protocl."""
    if re.compile('http://').match(url) == None:
        url = 'http://' + url
        return url
    else:
        return url


def get_clean_band_url(url):
    """Convert album/track url to base band url."""
    cleaner = re.compile('(/([a-z]{5})/)(.*)$')
    cleaned_band_url = re.sub(cleaner, "", url)
    print url
    print cleaned_band_url
    return cleaned_band_url


def make_soup(url):
    return BeautifulSoup(scrape_html(url))


def get_source_artist_name(url):
    """Gets name of the source artist off of its music page."""
    soup = make_soup(url)
    name = soup.find(
        'p', id='band-name-location').find(class_='title').get_text()
    return name


def scrape_html(url):
    """Scrapes html from a single url."""
    html = None
    try:
        response = OPENER.open(url)
        if response.code == 200:
            #print "Scraping %s" % url
            html = response.read()
        else:
            print "Invalid URL: %s \n" % url
    except urllib2.HTTPError:
        print "Failed to open %s \n" % url
    return html


def parse_music_page(soup, url):
    """Find/add all albumes on band's music page to URL_QUEUE."""
    album_count = 0
    for tag in soup.find_all('li', class_='square '):
        for link in tag.find_all('a'):
            if album_count <= MAX_ALBUMS:
                album = link.get('href')
                URL_QUEUE.append(check_url_protocol(url) + album)
                album_count += 1
            else:
                return


def get_album_tags(soup, artist):
    """Find album's tags and add their urls and name to TAG_QUEUE."""
    for tag in soup.find_all('a', class_='tag'):
        tag_url = tag.get('href')
        pretag_url = re.compile('(.*)(.bandcamp.com/tag/)')
        tag_string = re.sub(pretag_url, "", tag_url).replace(
            "-", " ")  # get the tag from the tag url
        #print tag_string + " --- " + tag_url
        if artist.same_artist(SESSION_ARTISTS.get_source_artist()):
            artist.update_tags(tag_string)
            if [tag_url, tag_string] not in TAG_QUEUE:
                SOURCE_TAGS.append(tag_string)
                TAG_QUEUE.append([tag_url, tag_string])
        elif tag_string in SOURCE_TAGS:
            artist.update_tags(tag_string)


def parse_tag_pages(url, tag):
    soup = make_soup(url)
    for album in soup.find_all("li", class_="item"):
        album_url = album.a.get("href")
        band_name = album.find(class_='itemsubtext').get_text()
        #print band_name
        band_url = get_clean_band_url(album_url)
        SESSION_ARTISTS.add_artist(band_name, band_url)
        #print band_name + " --- " + album_url
    try:
        next_page = soup.find(class_='nextprev next').a.get('href')
        if int(next_page[-1:]) <= MAX_TAG_PAGES:
            parse_tag_pages(url[:-7] + next_page, tag)
        else:
            pass
            #print "\nFinished scraping %s: page limit reached.\n" % tag
    except AttributeError:
        pass
        #print "\nFinished scraping %s: no more pages.\n" % tag


def create_sql_db(db_name):
    print "Opening connection to %s." % (db_name + ".db")
    con = sqlite3.connect(db_name)
    sql = con.cursor()
    sql.execute("""CREATE TABLE IF NOT EXISTS artist_tags(
         id INTEGER PRIMARY KEY,
         artist TEXT,
         url TEXT,
         tag TEXT,
         count TEXT
    );""")
    return con, sql


class TagCount:
    """Used to create aggregate values in sql table."""

    def __init__(self):
        self.count = 0

    def step(self, value):
        self.count += value

    def finalize(self):
        return self.count


class Artist:
    def __init__(self, name, url):
        self.artist_name = name
        self.artist_url = url
        self.tag_dictionary = {}
        self.total_common_tag_count = 0
        self.unique_common_tag_count = 0

    def update_tags(self, tag):
        # updates tag count or adds new tag to dictionary
        self.total_common_tag_count += 1
        if tag not in self.tag_dictionary:
            self.unique_common_tag_count += 1
            self.tag_dictionary[tag] = 1
        else:
            self.tag_dictionary[tag] = self.tag_dictionary[tag] + 1

    def same_artist(self, ref_artist):
        # use unique band url to check if two artists are the same
        if ref_artist.get_url() == self.artist_url:
            return True
        else:
            return False

    def get_index(self):
        try:
            return self.total_common_tag_count/self.unique_common_tag_count
        except ZeroDivisionError:
            return 0

    def get_unique_tag_count(self):
        return self.unique_common_tag_count

    def get_common_tag_count(self):
        return self.total_common_tag_count

    def get_name(self):
        return self.artist_name

    def get_url(self):
        return self.artist_url

    def get_tag_dictionary(self):
        return self.tag_dictionary

    def get_tag_count(self, tag):
        # returns current count of the specified tag
        return self.tag_dictionary[tag]


class Session_Artists:
    def __init__(self, name, url):
        self.source_artist = Artist(name, url)
        self.artist_list = []

    def set_source_artist(self, name, url):
        self.source_artist = Artist(name, url)

    def add_artist(self, name, url):
        new_artist = Artist(name, url)
        if not self.artist_included(new_artist) and not new_artist.same_artist(self.source_artist):
            self.artist_list.append(new_artist)

    def artist_included(self, new_artist):
        for artist in self.artist_list:
            if new_artist.same_artist(artist):
                return True
        return False

    def get_artist_list(self):
        return self.artist_list

    def get_source_artist(self):
        return self.source_artist

    def session_len(self):
        return len(self.artist_list)


SOURCE_MUSIC_URL = prepare_source_band_url(SOURCE_URL)
music_soup = make_soup(SOURCE_MUSIC_URL)
parse_music_page(music_soup, SOURCE_URL)
SOURCE_NAME = get_source_artist_name(SOURCE_MUSIC_URL)
SESSION_ARTISTS = Session_Artists(SOURCE_NAME, SOURCE_MUSIC_URL)
create_sql_db(SOURCE_NAME)

#print tag
# SOURCE_TAGS.append(tag)

print "Source Artist:", SESSION_ARTISTS.get_source_artist().get_name() + "\n"

"""Get tags from all source artist's albums."""

print "Getting Source Artist tags.\n"
while len(URL_QUEUE) > 0:
    try:
        album_soup = make_soup(URL_QUEUE.popleft())
        get_album_tags(album_soup, SESSION_ARTISTS.get_source_artist())
    except urllib2.URLError:
        pass


"""Get artists from all source tag pages."""

print "Going through tag pages.\n"
while len(TAG_QUEUE) > 0:
    try:
        tag = TAG_QUEUE.popleft()
        tag_name = tag[1]
        tag_url = tag[0]
        parse_tag_pages(tag_url + '?page=1', tag_name)
    except urllib2.URLError:
        pass


"""Go through SESSION_ARTISTS' music pages -> albums -> tags."""

print "Going through artist pages.\n"
print "SESSION_ARTISTS:", len(SESSION_ARTISTS.get_artist_list())
count = 0
error_count = 0
for artist in SESSION_ARTISTS.get_artist_list():
    #print artist.get_name()
    try:
        music_soup = make_soup(make_music_page_url(artist.get_url()))
        parse_music_page(music_soup, artist.get_url())
        while len(URL_QUEUE) > 0:
            count += 1
            #print count
            url = URL_QUEUE.popleft()
            #print url
            album_soup = make_soup(url)
            get_album_tags(album_soup, artist)
            if (count % 25 == 0):
                print count
        #print artist.get_name()
    except urllib2.URLError:
        error_count += 1
        pass

print "\ndone looking at artists: %d errors\n" % error_count

# for artist in SESSION_ARTISTS.get_artist_list():
#print artist.get_url()
print SESSION_ARTISTS.session_len()
#print artist.get_name() + ' --- ' + artist.get_tag_dictionary()[tag]

print SESSION_ARTISTS.get_source_artist().get_tag_dictionary()
print SOURCE_TAGS

SESSION_HEAP = []
# heapq.heapify(SESSION_HEAP)
for artist in SESSION_ARTISTS.get_artist_list():
    #print artist.get_unique_tag_count()
    heapq.heappush(SESSION_HEAP, ((100-artist.get_common_tag_count()),
                                  artist.get_name(), artist.get_url()))
for a in range(0, 11):
    print heapq.heappop(SESSION_HEAP)