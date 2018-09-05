# Change Log

All notable changes to the "nebula-theme" extension will be documented in this file.

## **[1.3.0]** - 2018-09-04
### Added

- Styling for the new (VSC 1.26.0) workbench theme colors:
  - Breadcrumbs & the breadcrump dropdown picker menu
  - Menus, context menus, and the menubar (preview features)
    - Enable by setting `window.titleBarStyle` to `custom` 
  - New settings editor (preview feature)
    - Try it out with the **Preferences: Open Settings (Preview)** command

### Changed

- Some punctuation elements are now more colorful (Mauve: `#E7ADFB`)
  - Square braces in JS and TS
  - Accessor periods (e.g. `object.property`)
  - Punctuation separators (e.g. commas between parameters in a function call)
- Object code elements have been de-emphasized (`#F6F0FF` -> `#C0B9DF`)
  - This also affects T-SQL database names


## **[1.2.1]** - 2018-07-17
### Changed
- Pick group labels are now legible
  - For example, the "light themes" and "dark themes" text in the color theme selection menu

## **[1.2.0]** - 2018-07-15
### Added
- Error and warning colors to list text
- Title bar foreground and border colors
  - Title bar border will be hidden when the 'nebula-theme.materialize' setting is enabled
  - These elements are visible when `window.titleBarStyle` is set to `custom`
- Background colors for the new grid and centered layout features  

### Changed
- Input boxes and dropdown menus are now dark
- Scrollbar slider is now dark

## **[1.1.1]** - 2018-05-03
### Added
- `editorHint.foreground`: `#F2C88C`
- `editorIndentGuide.activeBackground`: `#B2CFFB3A`

## **[1.1.0]**
### Added
- Multiple new configuration options:
  - Remove workspace borders for a flatter appearance with the `nebula-theme.materialize` setting
  - Toggle italic comments on/off with the `nebula-theme.commentItalics` setting
  - Switch between 5-degrees of code italics with the `nebula-theme.themeItalics` setting

### Changed
- Status bar is now more colorful when debugging and when opening an empty workspace (no-folder status)
- Default italic settings have been revised to work better across more languages
- Hover widgets and the peek editor background now match the main editor background color

## **[1.0.0]** - 2018-04-14
- Initial release

_Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file._
