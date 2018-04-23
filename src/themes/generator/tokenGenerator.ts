import { ThemeConfiguration, ThemeJsonOptions, ITokenGroup, FontStyle } from '../../models/index';
// import * as merge from 'lodash.merge';
import merge = require('lodash.merge');

/**
 * Get all file icons that can be used in this theme.
 */
export const getTokenStyleDefinitions = (tokenColors: ITokenGroup[], config: ThemeConfiguration, options: ThemeJsonOptions): ThemeConfiguration => {
	const getEnabledTokenGroupDefinitions = enableGroupsByThemeConfig(tokenColors, options.themeItalics);
	const tokenCommentItalicsDefinition = setItalicCommentsDefintions(options.commentItalics);
	const allTokenDefinitions: ITokenGroup[] = [...getEnabledTokenGroupDefinitions, tokenCommentItalicsDefinition];
	
	console.log('enabled groups ->' + getEnabledTokenGroupDefinitions);
	console.log('enabled comment italics ->' + tokenCommentItalicsDefinition);
	console.log('all token definitions -> ' + allTokenDefinitions);

	config.tokenColors = [...allTokenDefinitions];

	return config; //merge({}, allTokenDefinitions);
};

const enableGroupsByThemeConfig = (tokenColors: ITokenGroup[], themeItalics: string): ITokenGroup[] => {
	return tokenColors.filter(group => {
		let exclusions = group.settings.excludeIn;
		
		console.log('token exclusions -> ' + exclusions.toString());
		
		return !exclusions ? true : exclusions.some(p => p === themeItalics);
	});
};

const setItalicCommentsDefintions = (enabled: boolean = true): ITokenGroup => {
	if (!enabled) { return; }
	const obj: ITokenGroup = {
		name: TokenScopes.Comments,
		scope: [TokenScopes.Comments],
		settings: { fontStyle: FontStyle.Italics }
	};

	console.log('italics object -> ' + obj.toString());

	return merge({}, obj);
};

const enum TokenScopes {
	Comments = 'comments'
}