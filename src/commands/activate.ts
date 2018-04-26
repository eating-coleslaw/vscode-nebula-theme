import * as vscode from 'vscode';
import * as helpers from './../helpers';
import * as i18n from './../i18N';

/** Activate the color theme by changing the settings for the colorTheme. */
export const activateColorTheme = () => {
    return setColorTheme();
};

/** Set the color theme in the config. */
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
