import * as helpers from './../helpers';
import * as vscode from 'vscode';
import opn = require('opn');
import * as i18n from './../i18N';
import { activateColorTheme } from '../commands/activate';

/** Show the welcome message if the color theme has been installed the first time. */
export const showWelcomeMessage = () => {

    vscode.window.showInformationMessage(
        i18n.translate('themeInstalled'),

        // show 'Activate' button if icon theme is not active
        helpers.isThemeNotVisible() ? i18n.translate('activate') : i18n.translate('howToActivate')
        
    ).then(handleWelcomeMessageActions);
};

/** Handle the actions of the welcome message. */
const handleWelcomeMessageActions = (value) => {
    switch (value) {
        case i18n.translate('activate'):
            activateColorTheme();
            break;

        case i18n.translate('howToActivate'):
            opn('https://code.visualstudio.com/docs/getstarted/themes#_selecting-the-color-theme');
            break;

        default:
            break;
    }
};
