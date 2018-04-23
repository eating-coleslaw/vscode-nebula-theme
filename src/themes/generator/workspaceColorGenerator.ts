import { IWorkspaceColor, ThemeConfiguration, ThemeJsonOptions } from '../../models/index';
// import * as merge from 'lodash.merge';
import merge = require('lodash.merge');

/**
 * Get all file icons that can be used in this theme.
 */
export const getWorkspaceColorDefinitions = (wsColors: IWorkspaceColor[], config: ThemeConfiguration, options: ThemeJsonOptions): ThemeConfiguration => {
	config = merge({}, config);

	wsColors.forEach(wsColor => {
		let setColor: string;
		if (options.materialize) { setColor = NamedColor.Transparent; }
		else { setColor = wsColor.color; }
		config = merge({}, config, setColorDefinition(wsColor.scope, setColor));

		console.log('getWsColors -> ' + wsColor.scope + ' : ' + setColor + '  (materialize? ' + options.materialize + ')');
	});

	console.log('wsConfig -> ' + config.colors);

	return config;
};

const setColorDefinition = (wsScope: string, color: string = NamedColor.Transparent) => {
	const obj = { colors: {} };
	obj.colors[`${wsScope}`] = `${color}`;
	return obj;
};

const enum NamedColor {
	Transparent = '#0000'
}