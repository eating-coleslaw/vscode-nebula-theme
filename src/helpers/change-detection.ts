import { createThemeFile } from '../themes/index';
import { getObjectPropertyValue, setObjectPropertyValue } from './objects';
import { getExtensionConfiguration, promptToReload, getColorThemeJson, getThemeConfig } from '.';

/** Compare the workspace and the user configurations with the current setup of the icons. */
export const detectConfigChanges = () => {
    const configs = Object.keys(getExtensionConfiguration())
        .map(c => c.split('.').slice(1).join('.'));

    console.log('detected change -> ' + configs);

    return compareConfigs(configs).then(updatedOptions => {
        
        console.log('what now?');
        
        // if there's nothing to update
        if (!updatedOptions) {
            
            console.log('no updated options :/');

            return;
        }

        console.log('how about here?');

		/* update icon json file with new options
		*  TODO: Update for Nebula
		*/
        return createThemeFile(updatedOptions).then(() => {
            promptToReload();
        }).catch(err => {
            console.error('failed to create -> ' + err);
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

    console.log('we compared? -> ' + configs);

	/* 
	 * TODO: Update for Nebula
	*/
    return getColorThemeJson().then(json => {
        configs.forEach(configName => {
            
            console.log('config name -> ' + configName);
            
            // no further actions (e.g. reload) required
            //if (/show(Welcome|Update|Reload)Message/g.test(configName)) { return; }

            const configValue = getThemeConfig(configName).globalValue;
            const currentState = getObjectPropertyValue(json.options, configName);

            if (configValue !== undefined && JSON.stringify(configValue) !== JSON.stringify(currentState)) {
                setObjectPropertyValue(json.options, configName, configValue);
                updateRequired = true;
            }
        });

        console.log('did we get it? -> ' + configs);

        return updateRequired ? json.options : undefined;
    });
};
