import { ThemeConfiguration, ThemeJsonOptions, ITokenGroup, FontStyle, ItalicsTheme } from '../../models/index';
import merge = require('lodash.merge');
import { commentScope, basicScopes, moreScopes, operatorScopes } from '../TokenGroups/index';

/**
 * Get all file icons that can be used in this theme.
 */
export const getTokenStyleDefinitions = (tokenColors: ITokenGroup[], config: ThemeConfiguration, options: ThemeJsonOptions): ThemeConfiguration => {
	config = merge({}, config);

	//config.tokenColors = [...tokenColors];

	const tokenDefinitions = setItalicTokenDefinitions(options.commentItalics, options.themeItalics);

	config = merge({}, config, tokenDefinitions);

	config.tokenColors = [...config.tokenColors, ...tokenColors];

	console.log('token config -> ' + config);

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

export const getTokenColorDefinitions = (tokenColors: ITokenGroup[], options: ThemeJsonOptions): ITokenGroup[] => {
	let themeItalics = options.themeItalics;
	let obj = [];
	console.log('theme italics -> ' + themeItalics);
	return tokenColors;

	tokenColors.forEach(group => {
		console.log('group -> ' + group);

		let exclusions = group.settings.excludeIn;
		if (exclusions.some(p => p === themeItalics)) { tokenColors.splice(tokenColors.indexOf(group), 1); }
	});

	/*
	tokenColors.forEach(group => {
		let exclusions = group.settings.excludeIn;
		if (!exclusions.some(p => p === themeItalics)) {
			config = merge({}, config, setTokenColorDefinition(group));
		}
	});
	*/

	console.log('token config -> ' + obj);

	return obj;
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

	else {
		array = [...array, ...basicScopes];
		return array;
	}
};

const setTokenColorDefinition = (tokenGroup: ITokenGroup ) => {
	let obj = {
		name: `${tokenGroup.name}`,
		scope: [...tokenGroup.scope],
		settings: {
			fontStyle: `${tokenGroup.settings.foreground}`
		}
	};
	console.log('token def -> ' + obj);
	return obj;
	/*
	let obj: ITokenGroup = {
		name: tokenGroup.name,
		scope: [...tokenGroup.scope],
		settings: tokenGroup.settings	
	};

	array.tokenColors = [obj];
	console.log('token def -> ' + obj);
	return array;
	*/
};

const setItalicCommentsDefintions = (enabled: boolean = true) => {
	if (!enabled) { return { tokenColors: [] }; }
	let obj = { tokenColors: [] };
	if (enabled) {
		obj.tokenColors = [
			{
				name: TokenScopes.Comments,
				scope: [TokenScopes.Comments],
				settings: { fontStyle: `${FontStyle.Italics}`}
			}
		];
	}

	console.log('italics object -> ' + obj.toString());

	return merge({}, obj);
};

const enum TokenScopes {
	Comments = 'comment'
}

const enum TokenSettings {
	FontStyle = 'fontStyle',
	Foreground = 'foreground'
}