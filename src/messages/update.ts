import * as helpers from './../helpers';
import * as vscode from 'vscode';
import opn = require('opn');
import * as i18n from './../i18N';
import { activateColorTheme } from '../commands/activate';

/** Show the update message if the icon theme has been updated. */
export const showUpdateMessage = () => {
    // if the user does not want to see the update message
    if (helpers.getThemeConfig('showUpdateMessage').globalValue !== true) { return; }

    vscode.window.showInformationMessage(
        i18n.translate('themeUpdated'),

        // show 'Activate' button if icon theme is not active
        helpers.isThemeNotVisible()
            ? i18n.translate('activate') : undefined,

        i18n.translate('readChangelog')
    ).then(handleUpdateMessageActions);
};

/** Handle the actions of the update message. */
const handleUpdateMessageActions = (value) => {
    switch (value) {
        case i18n.translate('activate'):
            activateColorTheme();
            break;

        case i18n.translate('readChangelog'):
            opn('https://marketplace.visualstudio.com/items/ChirtleLovesDolls.nebula-theme/changelog');
            break;

        default:
            break;
    }
};
