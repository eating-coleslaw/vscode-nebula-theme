import urllib2	# html scraper
import re		# regex module
import sys		# exit quits program prematurely in event of error

OPENER = urllib2.build_opener()
OPENER.addheaders = [('User-agent', 'Mozilla/5.0')]

def main(url):
	url = check_url_protocol(url)
	tease_html = scrape_html(url)
	print 'Did you think I would actually print that?'
	sys.exit(0)

def check_url_protocol(url):
	"""Ensures a given url has the http:// protocl."""
	if re.compile('http://').match(url) == None:
		url = 'http://' + url
		return url
	else:
		return url

def scrape_html(url):
	"""Scrapes and returns html from a single url."""
	html = None
	try:
		response = OPENER.open(url)
		if response.code == 200:
			html = response.read()
		else:
			print "Invalid URL: %s \n" % url
	except urllib2.HTTPError:
		print "Failed to open %s \n" % url
	return html

main("michellezauner.bandcamp.com")
