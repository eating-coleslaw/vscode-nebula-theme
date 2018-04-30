import { showUpdateMessage } from './update';
import { showWelcomeMessage } from './welcome';
import { showConfigUpdateMessages } from './configUpdate';
import { ThemeStatus } from '../helpers/versioning';
import { reloadWindow } from '../helpers';

/** Initialization of the colors every time the theme get activated */
export const showStartMessages = (themeStatus: Promise<ThemeStatus>) => {
    return themeStatus.then((status: ThemeStatus) => {
        if (status === ThemeStatus.updated) {
            showUpdateMessage();
        }
        else if (status === ThemeStatus.neverUsedBefore) {
            showWelcomeMessage();
        }
        else if (status === ThemeStatus.firstConfigurable) {
            showConfigUpdateMessages().then(() => {
                reloadWindow();
            });
        }
    });
};
