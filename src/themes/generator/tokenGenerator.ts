import { ThemeConfiguration, ThemeJsonOptions, ITokenGroup, FontStyle, ItalicsTheme } from '../../models/index';
import merge = require('lodash.merge');
import { commentScope, basicScopes, moreScopes, operatorScopes, noRestraintScopes } from '../TokenGroups/index';


export const getTokenStyleDefinitions = (tokenColors: ITokenGroup[], config: ThemeConfiguration, options: ThemeJsonOptions): ThemeConfiguration => {
	config = merge({}, config);

	const tokenDefinitions = setItalicTokenDefinitions(options.commentItalics, options.themeItalics);

	config = merge({}, config, tokenDefinitions);

	config.tokenColors = [...config.tokenColors, ...tokenColors];

	return config;
};

const setItalicTokenDefinitions = (italicComments: boolean, italicsTheme: string) => {
	let obj = { tokenColors: [] };
	obj.tokenColors = [
		{
			name: 'Compiled Italics',
			scope: [...getItalicScopeArray(italicComments, italicsTheme)],
			settings: { fontStyle: `${FontStyle.Italics}`}
		}
	];

	return merge({}, obj);
};

const getItalicScopeArray = (italicComments: boolean, italicsTheme: string): string[] => {
	let array: string[] = [];
	if (italicComments) {
		array = [...array, ...commentScope];
	}

	if (italicsTheme === ItalicsTheme.None) { return array; }

	if (italicsTheme === ItalicsTheme.Basic) {
		array = [...array, ...basicScopes];
		return array;
	}

	else if (italicsTheme === ItalicsTheme.More) {
		array = [...array, ...basicScopes, ...moreScopes];
		return array;
	}

	else if (italicsTheme === ItalicsTheme.Operator) {
		array = [...array, ...basicScopes, ...moreScopes, ...operatorScopes];
		return array;
	}

	else if (italicsTheme === ItalicsTheme.NoRestraint) {
		array = [...array, ...basicScopes, ...moreScopes, ...operatorScopes, ...noRestraintScopes];
		return array;
	}

	else {
		array = [...array, ...basicScopes];
		return array;
	}
};