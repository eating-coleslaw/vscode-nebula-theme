import * as vscode from 'vscode';
import { activateColorTheme } from './activate';
import { restoreDefaultConfig } from './restoreConfig';

// Activate theme
const activateThemeCommand = vscode.commands.registerCommand('nebula-theme.activateTheme', () => {
    activateColorTheme();
});

// Reset config
const restoreDefaultConfigCommand = vscode.commands.registerCommand('nebula-theme.restoreDefaultConfig', () => {
    restoreDefaultConfig();
});

export const commands = [
    activateThemeCommand,
    restoreDefaultConfigCommand
];
