import { ThemeConfiguration, ThemeJsonOptions, ITokenGroup, FontStyle } from '../../models/index';
import merge = require('lodash.merge');

/**
 * Get all file icons that can be used in this theme.
 */
export const getTokenStyleDefinitions = (tokenColors: ITokenGroup[], config: ThemeConfiguration, options: ThemeJsonOptions): ThemeConfiguration => {
	config = merge({}, config);
	
	const tokenColorDefinitions = getTokenColorDefinitions(tokenColors, options);
	const italicCommentsDefinition = setItalicCommentsDefintions(options.commentItalics);
	
	//config.tokenColors = [...tokenColors];
	
	config.tokenColors = [...tokenColorDefinitions];
	//config = merge({}, config, italicCommentsDefinition);

	//config = merge({}, tokenColorDefinitions, italicCommentsDefinition);
	//config = merge({}, italicCommentsDefinition);
	//config = merge({}, ...tokenColors, italicCommentsDefinition);

	//console.log('token color defs ->' + tokenColorDefinitions);
	console.log('enabled comment italics ->' + italicCommentsDefinition);
	console.log('token config -> ' + config);

	return config; //merge({}, allTokenDefinitions);
};

export const getTokenColorDefinitions = (tokenColors: ITokenGroup[], options: ThemeJsonOptions): ITokenGroup[] => {
	let themeItalics = options.themeItalics;
	let obj = [];
	console.log('theme italics -> ' + themeItalics);
	return tokenColors;

	for (let group of tokenColors) {
		console.log('group -> ' + group);

		let exclusions = group.settings.excludeIn;
		//if (exclusions.some(p => p === themeItalics)) { continue; }
		obj.concat(group);
	}

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