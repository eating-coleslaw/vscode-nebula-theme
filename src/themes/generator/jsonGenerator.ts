//import { IconConfiguration, IconPack, IconJsonOptions } from '../../models/index';
//import { getFileIconDefinitions, getFolderIconDefinitions, getLanguageIconDefinitions, generateFolderIcons } from './index';
import { workspaceColors } from '../vscColors';
import { tokenGroups } from '../tokenGroups';
//import { languageIcons } from '../languageIcons';
import { themeJsonName } from './constants';
import * as merge from 'lodash.merge';
import { ThemeJsonOptions, ThemeConfiguration, ItalicsTheme } from '../../models';
import * as path from 'path';
import * as fs from 'fs';

/**
 * Generate the complete theme configuration object that can be written as JSON file.
 */
export const generateThemeConfigurationObject = (options: ThemeJsonOptions): ThemeConfiguration => {
    const themeConfig = merge({}, new ThemeConfiguration(), { options });
    const languageIconDefinitions = getWorkspaceColorDefinitions(workspaceColors, themeConfig, options);
    const fileIconDefinitions = getFileIconDefinitions(fileIcons, iconConfig, options);
    const folderIconDefinitions = getFolderIconDefinitions(folderIcons, iconConfig, options);

    return merge({}, languageIconDefinitions, fileIconDefinitions, folderIconDefinitions);
};

/**
 * Create the JSON file that is responsible for the theme's appearance in the editor.
 */
export const createIconFile = (jsonOptions?: ThemeJsonOptions): Promise<string> => {
    // override the default options with the new options
    const options = merge({}, getDefaultThemeOptions(), jsonOptions);

    const themeJsonPath = path.join(__dirname, '../../../', 'src', themeJsonName);
    const json = generateThemeConfigurationObject(options);

    return new Promise((resolve, reject) => {
        fs.writeFile(themeJsonPath, JSON.stringify(json, undefined, 2), (err) => {
            if (err) {
                reject(err);
            }
            if (options.folders.color) {
                generateFolderIcons(options.folders.color).catch(e => reject(e)).then(() => {
                    resolve(themeJsonName);
                });
            }
        });
    });
};

/**
 * The options control the generator and decide which @TODO: finish description
 */
export const getDefaultThemeOptions = (): ThemeJsonOptions => ({
    commentItalics: true,
	themeItalics: ItalicsTheme.Basic,
	materialize: false
});
