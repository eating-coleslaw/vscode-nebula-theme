import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import * as reloadMessages from './../messages/reload';
import { AdvancedWorkspaceConfiguration } from '../models';
import { themeJsonName } from '../themes';
import { ThemeConfiguration } from '../models/index';

/**
 * Get configuration of vs code.
 */
export const getConfig = (section?: string) => {
    return vscode.workspace.getConfiguration(section) as AdvancedWorkspaceConfiguration;
};

/**
 * Get list of configuration entries of package.json
 */
export const getExtensionConfiguration = (): { [config: string]: any } => {
    return vscode.extensions.getExtension('ChirtleLovesDolls.nebula-theme').packageJSON.contributes.configuration.properties;
};

/**
 * Update configuration of vs code.
 */
export const setConfig = (section: string, value: any, global: boolean = false) => {
    return getConfig().update(section, value, global);
};


export const getThemeConfig = (section: string) => {
    return getConfig('nebula-theme').inspect(section);
};

/**
 * Set the config of the theme.
 */
export const setThemeConfig = (section: string, value: any, global: boolean = false) => {
    return getConfig('nebula-theme').update(section, value, global);
};

/**
 * Is the theme already activated in the editor configuration?
 * @param{boolean} global false by default
 */
export const isThemeActivated = (global: boolean = false): boolean => {
    return global ? getConfig().inspect('workbench.colorTheme').globalValue === 'Nebula'
        : getConfig().inspect('workbench.colorTheme').workspaceValue === 'Nebula';
};

/**
 * Is the theme not visible for the user?
 */
export const isThemeNotVisible = (): boolean => {
    const config = getConfig().inspect('workbench.colorTheme');
    return (!isThemeActivated(true) && config.workspaceValue === undefined) || // no workspace and not global
        (!isThemeActivated() && config.workspaceValue !== undefined);
};

/**
 * Return the path of the extension in the file system.
 */
export const getExtensionPath = () => path.join(__dirname, '..', '..', '..');

/**
 * Get the configuration of the theme as JSON Object
 */
export const getColorThemeJson = (): Promise<ThemeConfiguration> => {
    return new Promise((resolve, reject) => {
        const themeJsonPath = path.join(getExtensionPath(), 'out', 'src', themeJsonName);
        
        fs.readFile(themeJsonPath, 'utf8', (err, data) => {
            if (data) {
                resolve(JSON.parse(data));
            } else {
                reject(err);
            }
        });
    });
};

/**
 * Reload vs code window
 */
export const promptToReload = () => {
    return reloadMessages.showConfirmToReloadMessage().then(result => {
        if (result) { reloadWindow(); }
    });
};

const reloadWindow = () => {
    return vscode.commands.executeCommand('workbench.action.reloadWindow');
};
