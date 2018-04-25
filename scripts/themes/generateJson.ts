/**
 * This file is only a script file that should only be executed by the npm scripts.
 */
import { createThemeFile } from './../../src/themes/index';
import * as path from 'path';
import * as fs from 'fs';
import * as painter from '../helpers/painter';

createThemeFile().then((fileName: string) => {
    
    console.log('script -> generateJson ran here');

    console.log('at least we tried :(');
    
    const filePath = path.resolve('src', fileName);
    const out = path.resolve('out', 'src', fileName);
    fs.rename(filePath, out, (err) => {
        if (err) {
            console.error(painter.red('error stack' + err.stack));
        } else {
            console.log('> Nebula Color Theme:', painter.green(`Successfully generated color theme JSON file!`));
        }
    });
}).catch(err => {
    console.error(painter.red(err));
});
