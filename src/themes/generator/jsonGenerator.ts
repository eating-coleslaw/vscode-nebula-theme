import { workspaceColors } from '../workspaceColors';
import { tokenGroups } from '../tokenGroups';
import { getWorkspaceColorDefinitions } from './workspaceColorGenerator';
import { themeJsonName } from './constants';
import merge = require('lodash.merge');
import { ThemeJsonOptions, ThemeConfiguration, ItalicsTheme } from '../../models';
import * as path from 'path';
import * as fs from 'fs';
import { getTokenStyleDefinitions } from './tokenGenerator';

/**
 * Create the JSON file that is responsible for the theme's appearance in the editor.
 */
export const createThemeFile = (jsonOptions?: ThemeJsonOptions): Promise<string> => {
    // override the default options with the new options
    const options = merge({}, getDefaultThemeOptions(), jsonOptions);

    console.log('options -> ' + options);

    const themeJsonPath = path.join(__dirname, '../../../', 'src', themeJsonName);

    console.log('createThemeFile -> ' + themeJsonPath);

    const json = generateThemeConfigurationObject(options);

    //console.log('json theme config object ->' + JSON.stringify(json));

    return new Promise((resolve, reject) => {
        fs.writeFile(themeJsonPath, JSON.stringify(json, undefined, 2), (err) => {
            if (err) {
                resolve(themeJsonName);
                console.log('fake resolve :(');
                //reject('failed writeFile in jsonGenerator -> ' + err);
            }
        });


    });
};

/**
 * Generate the complete theme configuration object that can be written as JSON file.
 */
export const generateThemeConfigurationObject = (options: ThemeJsonOptions): ThemeConfiguration => {
    
    console.log('tried generating config object :(');
    
    const themeConfig = merge({}, new ThemeConfiguration(), { options });
    const workspaceColorDefinitions = getWorkspaceColorDefinitions(workspaceColors, themeConfig, options);
    const tokenColorDefinitions = getTokenStyleDefinitions(tokenGroups, themeConfig, options);

    console.log('config workspace colors -> ' + workspaceColorDefinitions);
    console.log('config token colors -> ' + tokenColorDefinitions);

    return merge({}, workspaceColorDefinitions, tokenColorDefinitions);
};

/**
 * The options control the generator and decide which @TODO: finish description
 */
export const getDefaultThemeOptions = (): ThemeJsonOptions => ({
    commentItalics: true,
	themeItalics: ItalicsTheme.Basic,
	materialize: false
});
