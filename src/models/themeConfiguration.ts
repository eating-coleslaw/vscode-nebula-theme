import { ThemeJsonOptions, FontStyle } from './index';

export class ThemeConfiguration {
	colors?: { [s: string]: string; }; /* VscElement[]; */
	name?: string;
	scope?: string[];
	settings?: ITokenColorSettings;
	/* tokenColors: TokenGroup[]; */
	tokenColors: ITokenColorDefinition[]; //ThemeConfiguration[];
	options?: ThemeJsonOptions;
	italics?: ITokenColorDefinition;

	constructor() {
		this.colors = {};
		this.tokenColors = [];
		this.options = {};
		this.italics = {
			name: 'italics',
			scope: [],
			settings: { fontStyle: FontStyle.Italics }
		};
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