import * as vscode from 'vscode';
import { activateColorTheme } from './activate';
import { restoreDefaultConfig } from './restoreConfig';

// Activate theme
const activateThemeCommand = vscode.commands.registerCommand('material-icon-theme.activateIcons', () => {
    activateColorTheme();
});

// Reset config
const restoreDefaultConfigCommand = vscode.commands.registerCommand('material-icon-theme.restoreDefaultConfig', () => {
    restoreDefaultConfig();
});

export const commands = [
    activateThemeCommand,
    restoreDefaultConfigCommand
];
