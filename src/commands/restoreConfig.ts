import * as helpers from './../helpers';
import { getDefaultThemeOptions } from '../themes/index';

/** Restore all configurations to default. */
export const restoreDefaultConfig = () => {
    const defaultOptions = getDefaultThemeOptions();
    helpers.setThemeConfig('commentItalics', defaultOptions.commentItalics, true);
    helpers.setThemeConfig('themeItalics', defaultOptions.themeItalics, true);
    helpers.setThemeConfig('materialize', defaultOptions.materialize, true);
};