//import { IconConfiguration, IconPack, IconJsonOptions } from '../../models/index';
//import { getFileIconDefinitions, getFolderIconDefinitions, getLanguageIconDefinitions, generateFolderIcons } from './index';
import { vscElements } from '../vscColors';
import { tokenGroups } from '../tokenGroups';
//import { languageIcons } from '../languageIcons';
import { iconJsonName } from './constants';
import * as merge from 'lodash.merge';
import { ThemeJsonOptions, ThemeConfiguration } from '../../models';
//import * as path from 'path';
//import * as fs from 'fs';

/**
 * Generate the complete theme configuration object that can be written as JSON file.
 */
export const generateThemeConfigurationObject = (options: ThemeJsonOptions): ThemeConfiguration => {
    const themeConfig = merge({}, new ThemeConfiguration(), { options });
    const languageIconDefinitions = getLanguageIconDefinitions(languageIcons, iconConfig, options);
    const fileIconDefinitions = getFileIconDefinitions(fileIcons, iconConfig, options);
    const folderIconDefinitions = getFolderIconDefinitions(folderIcons, iconConfig, options);

    return merge({}, languageIconDefinitions, fileIconDefinitions, folderIconDefinitions);
};

/**
 * Create the JSON file that is responsible for the icons in the editor.
 */
export const createIconFile = (jsonOptions?: IconJsonOptions): Promise<string> => {
    // override the default options with the new options
    const options = merge({}, getDefaultIconOptions(), jsonOptions);

    const iconJSONPath = path.join(__dirname, '../../../', 'src', iconJsonName);
    const json = generateIconConfigurationObject(options);

    return new Promise((resolve, reject) => {
        fs.writeFile(iconJSONPath, JSON.stringify(json, undefined, 2), (err) => {
            if (err) {
                reject(err);
            }
            if (options.folders.color) {
                generateFolderIcons(options.folders.color).catch(e => reject(e)).then(() => {
                    resolve(iconJsonName);
                });
            }
        });
    });
};

/**
 * The options control the generator and decide which icons are disabled or not.
 */
export const getDefaultIconOptions = (): IconJsonOptions => ({
    folders: {
        theme: 'specific',
        color: '#90a4ae',
        associations: {},
    },
    activeIconPack: 'angular',
    hidesExplorerArrows: false,
    files: { associations: {} },
    languages: { associations: {} },
});
