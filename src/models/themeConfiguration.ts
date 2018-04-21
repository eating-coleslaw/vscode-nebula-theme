import { ThemeJsonOptions, VscElement, TokenGroup  } from './index';

export class ThemeConfiguration {
	vscElements: VscElement[];
	tokenGroups: TokenGroup[];
	options?: ThemeJsonOptions;

	constructor() {
		this.vscElements = [];
		this.tokenGroups = [];
		this.options = {};
	}
}