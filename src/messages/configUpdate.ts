import * as vscode from 'vscode';
import * as i18n from './../i18N';
import opn = require('opn');

/** User has to confirm if they want to reload the editor */
export const showConfigUpdateMessages = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {

        vscode.window.showInformationMessage(
            'Restart VS Code to start using the latest Nebula features',
			i18n.translate('reload'),
			i18n.translate('readChangelog'),
			i18n.translate('reloadAndOpen')
        ).then(value => {
            switch (value) {
                case i18n.translate('reload'):
                    resolve(true);
                    break;

				case i18n.translate('readChangelog'):
					opn('https://marketplace.visualstudio.com/items/ChirtleLovesDolls.nebula-theme/changelog');
					break;

				case i18n.translate('reloadAndOpen'):
					opn('https://marketplace.visualstudio.com/items/ChirtleLovesDolls.nebula-theme/changelog');
					resolve(true);
					break;


                default:
                    resolve(false);
                    break;
            }
        });
    });
};
