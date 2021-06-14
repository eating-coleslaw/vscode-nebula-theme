import { workspaceColors } from '../workspaceColors';
import { tokenGroups } from '../tokenGroups';
import { getWorkspaceColorDefinitions } from './workspaceColorGenerator';
import { themeJsonName } from './constants';
import { ThemeJsonOptions, ThemeConfiguration, ItalicsTheme } from '../../models';
import * as path from 'path';
import * as fs from 'fs';
import { getTokenStyleDefinitions } from './tokenGenerator';

/**
 * Create the JSON file that is responsible for the theme's appearance in the editor.
 */
export const createThemeFile = (jsonOptions?: ThemeJsonOptions): Promise<string> => {
    // override the default options with the new options
    const options = {...getDefaultThemeOptions(), ...jsonOptions};

    const themeJsonPath = path.join(__dirname, '../../../', 'src', themeJsonName);

    const json = generateThemeConfigurationObject(options);

    return new Promise((resolve, reject) => {
        fs.writeFile(themeJsonPath, JSON.stringify(json, undefined, 2), (err) => {
            if (err) { 
                reject(err); }
            else {
                resolve(themeJsonName);
            }
        });
    });
};

/**
 * Generate the complete theme configuration object that can be written as JSON file.
 */
export const generateThemeConfigurationObject = (options: ThemeJsonOptions): ThemeConfiguration => {
    
    const themeConfig = {...new ThemeConfiguration(), ...options};

    const workspaceColorsConfig = getWorkspaceColorDefinitions(workspaceColors, themeConfig, options);
    themeConfig.colors = workspaceColorsConfig.colors;

    const tokenColorsConfig = getTokenStyleDefinitions(tokenGroups, themeConfig, options);
    themeConfig.tokenColors = tokenColorsConfig.tokenColors;

    return themeConfig;
};

/**
 * The options control the generator
 */
export const getDefaultThemeOptions = (): ThemeJsonOptions => ({
    commentItalics: true,
	themeItalics: ItalicsTheme.Basic,
	materialize: false
});
