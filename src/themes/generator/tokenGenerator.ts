import { ThemeConfiguration, ThemeJsonOptions, ITokenGroup, FontStyle } from '../../models/index';
import merge = require('lodash.merge');

/**
 * Get all file icons that can be used in this theme.
 */
export const getTokenStyleDefinitions = (tokenColors: ITokenGroup[], config: ThemeConfiguration, options: ThemeJsonOptions): ThemeConfiguration => {
	config = merge({}, config);
	
	const tokenColorDefinitions = getTokenColorDefinitions(tokenColors, options);
	const italicCommentsDefinition = setItalicCommentsDefintions(options.commentItalics);
	
	config = merge({}, tokenColorDefinitions, italicCommentsDefinition);

	/*const getEnabledTokenGroupDefinitions = enableGroupsByThemeConfig(tokenColors, options.themeItalics);
	const tokenCommentItalicsDefinition = setItalicCommentsDefintions(options.commentItalics);
	const allTokenDefinitions: ITokenGroup[] = [...getEnabledTokenGroupDefinitions, tokenCommentItalicsDefinition];
	*/

	// console.log('enabled groups ->' + getEnabledTokenGroupDefinitions);
	// console.log('enabled comment italics ->' + tokenCommentItalicsDefinition);
	// console.log('all token definitions -> ' + allTokenDefinitions);

	//config.tokenColors = [...allTokenDefinitions];

	return config; //merge({}, allTokenDefinitions);
};

export const getTokenColorDefinitions = (tokenColors: ITokenGroup[], options: ThemeJsonOptions) => {
	let config = { tokenColors: [] };
	let themeItalics = options.themeItalics;

	tokenColors.forEach(group => {
		let exclusions = group.settings.excludeIn;
		if (!exclusions.some(p => p === themeItalics)) {
			config = merge({}, config, setTokenColorDefinition(group));
		}
	});

	console.log('token config -> ' + config);

	return config;
};

const setTokenColorDefinition = (tokenGroup: ITokenGroup ) => {
	const array = { tokenColors: [] };
	let obj: ITokenGroup = {
		name: tokenGroup.name,
		scope: [...tokenGroup.scope],
		settings: tokenGroup.settings	
	};
	array.tokenColors = [obj];
	console.log('token def -> ' + obj);
	return array;
};


const enableGroupsByThemeConfig = (tokenColors: ITokenGroup[], themeItalics: string): ITokenGroup[] => {
	return tokenColors.filter(group => {
		let exclusions = group.settings.excludeIn;
		
		console.log('token exclusions -> ' + exclusions.toString());
		
		return !exclusions ? true : exclusions.some(p => p === themeItalics);
	});
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
	/*
	const obj: ITokenGroup = {
		name: TokenScopes.Comments,
		scope: [TokenScopes.Comments],
		settings: { fontStyle: FontStyle.Italics }
	};
	*/

	console.log('italics object -> ' + obj.toString());

	return merge({}, obj);
};

const enum TokenScopes {
	Comments = 'comments'
}