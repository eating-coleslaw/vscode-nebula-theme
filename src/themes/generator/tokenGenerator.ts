import { ThemeConfiguration, ThemeJsonOptions, ITokenGroup, FontStyle } from '../../models/index';
import * as merge from 'lodash.merge';

/**
 * Get all file icons that can be used in this theme.
 */
export const getTokenStyleDefinitions = (tokenColors: ITokenGroup[], config: ThemeConfiguration, options: ThemeJsonOptions): ThemeConfiguration => {
	const getEnabledTokenGroupDefinitions = enableGroupsByThemeConfig(tokenColors, options.themeItalics);
	const tokenCommentItalicsDefinition = setItalicCommentsDefintions(options.commentItalics);
	const allTokenDefinitions = [...getEnabledTokenGroupDefinitions, ...tokenCommentItalicsDefinition];
	return merge({}, allTokenDefinitions);
};

const enableGroupsByThemeConfig = (tokenColors: ITokenGroup[], themeItalics: string): ITokenGroup[] => {
	// const obj: ITokenGroup[] = [];
	// tokenColors.forEach(group => {
	// 	let exclusions = group.settings.excludeIn;
	// })
	return tokenColors.filter(group => {
		let exclusions = group.settings.excludeIn;
		return !exclusions ? true : exclusions.some(p => p === themeItalics);
	});
};

const setItalicCommentsDefintions = (enabled: boolean = true): ITokenGroup[] => {
	if (!enabled) { return []; }
	const obj = {
		name: TokenScopes.Comments,
		scope: [TokenScopes.Comments],
		settings: { fontStyle: FontStyle.Italics }
	};
	return merge({}, obj);
};

const enum TokenScopes {
	Comments = 'comments'
}