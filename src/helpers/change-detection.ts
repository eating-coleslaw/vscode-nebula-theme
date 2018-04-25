import { createThemeFile, getDefaultThemeOptions } from '../themes/index';
import { getObjectPropertyValue, setObjectPropertyValue } from './objects';
import { getExtensionConfiguration, promptToReload, getColorThemeJson, getThemeConfig } from '.';
import { green } from '../../scripts/helpers/painter';

/** Compare the workspace and the user configurations with the current setup of the icons. */
export const detectConfigChanges = () => {
    const configs = Object.keys(getExtensionConfiguration())
        .map(c => c.split('.').slice(1).join('.'));

    return compareConfigs(configs).then(updatedOptions => {

        // if there's nothing to update
        if (!updatedOptions) { return; }

		// update theme json file with new options
        return createThemeFile(updatedOptions).then(() => {
            console.log(green('New theme configuration file successfully created!'));
            promptToReload();
        }).catch(err => {
            console.error(err);
        });
    });
};

/**
 * Compares a specific configuration in the settings with a current configuration state.
 * The current configuration state is read from the icons json file.
 * @param configs List of configuration names
 * @returns List of configurations that needs to be updated.
 */
const compareConfigs = (configs: string[]): Promise<{ [name: string]: any }> => {
    let updateRequired = false;

    return getColorThemeJson().then(json => {
        const defaults = getDefaultThemeOptions();

        configs.forEach(configName => {

            const configValue = getThemeConfig(configName).globalValue;
            const currentState = getObjectPropertyValue(json.options, configName);
            const configDefault = getObjectPropertyValue(defaults, configName);

            // If property is deleted, and it wasn't the default value, set it to the default value
            if (configValue === undefined && currentState !== configDefault) {
                setObjectPropertyValue(json.options, configName, configDefault);
                updateRequired = true;
            }

            else if (configValue !== undefined && currentState !== configValue) {
                setObjectPropertyValue(json.options, configName, configValue);
                updateRequired = true;
            }
        });

        return updateRequired ? json.options : undefined;
    });
};
