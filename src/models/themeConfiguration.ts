import { ThemeJsonOptions, ITokenGroup } from './index';

export class ThemeConfiguration {
	colors?: { [s: string]: string; };
	tokenColors?: ITokenGroup[];
	options?: ThemeJsonOptions;

	constructor() {
		this.colors = {};
		this.tokenColors = [];
		this.options = {};
	}
}