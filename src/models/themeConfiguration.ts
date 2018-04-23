import { ThemeJsonOptions, FontStyle, ITokenGroup } from './index';

export class ThemeConfiguration {
	colors?: { [s: string]: string; };
	name?: string;
	scope?: string[];
	settings?: ITokenColorSettings;
	tokenColors?: ITokenGroup[];
	options?: ThemeJsonOptions;

	constructor() {
		this.colors = {};
		this.tokenColors = [];
		this.options = {};
	}
}

interface ITokenColorDefinition {
	name: string;
	scope?: string[];
	settings?: ITokenColorSettings;
}

interface ITokenColorSettings {
	foreground?: string;
	fontStyle?: FontStyle;
}