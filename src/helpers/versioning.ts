import * as vscode from 'vscode';
import * as helpers from './index';
import semver = require('semver');
import { lastNonConfigVer } from '../themes/index';

export enum ThemeStatus {
    neverUsedBefore,
    firstConfigurable,
    updated,
    current
}

/** Check the current status of the theme */
export const checkThemeStatus = async (state: vscode.Memento) => {
    try {
        // get the version from the state
        const stateVersion = await state.get('nebula-theme.version');
        const packageVersion = getCurrentExtensionVersion();

        // check if the theme was used before
        if (stateVersion === undefined) {
            await updateExtensionVersionInMemento(state);
            if (!themeIsAlreadyActivated()) {
                return ThemeStatus.neverUsedBefore;
            }
            else if (semver.gt(packageVersion, lastNonConfigVer)) {
                    return ThemeStatus.firstConfigurable;
            }
            else {return themeIsAlreadyActivated() ? ThemeStatus.updated : ThemeStatus.neverUsedBefore; }
        }

        // compare the version in the state with the package version
        else if (semver.lt(stateVersion, packageVersion)) {
            await updateExtensionVersionInMemento(state);
            return ThemeStatus.updated;
        }
        else {
            return ThemeStatus.current;
        }
    }
    catch (err) {
        console.error(err);
    }
};

/** Check if the theme was used before */
const themeIsAlreadyActivated = () => {
    return helpers.isThemeActivated() || helpers.isThemeActivated(true);
};

/** Update the version number to the current version in the memento. */
const updateExtensionVersionInMemento = async (state: vscode.Memento) => {
    return await state.update('nebula-theme.version', getCurrentExtensionVersion());
};

/** Get the current version of the extension */
const getCurrentExtensionVersion = (): string => {
    return vscode.extensions.getExtension('ChirtleLovesDolls.nebula-theme').packageJSON.version;
};