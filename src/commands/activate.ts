import * as vscode from 'vscode';
import * as helpers from './../helpers';
import * as versioning from './../helpers/versioning';
import * as i18n from './../i18N';
import * as outdatedMessage from './../messages/outdated';

/** Activate the icon theme by changing the settings for the colorTheme. */
export const activateColorTheme = () => {
	//TODO: update to correct version support
    if (!versioning.checkVersionSupport('1.10.0')) {
        outdatedMessage.showOutdatedMessage();
        return Promise.reject('Outdated version of vscode!');
    }
    return setColorTheme();
};

/** Set the icon theme in the config. */
const setColorTheme = () => {
    // global user config
    return helpers.getConfig().update('workbench.colorTheme', 'nebula-theme', true)
        .then(() => {
            // local workspace config
            if (helpers.getConfig().inspect('workbench.colorTheme').workspaceValue !== undefined) {
                helpers.getConfig().update('workbench.colorTheme', 'nebula-theme');
            }
            vscode.window.showInformationMessage(i18n.translate('activated'));
        });
};
