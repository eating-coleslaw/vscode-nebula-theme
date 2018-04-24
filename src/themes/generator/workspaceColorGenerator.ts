import { IWorkspaceColor, ThemeConfiguration, ThemeJsonOptions } from '../../models/index';
import merge = require('lodash.merge');

export const getWorkspaceColorDefinitions = (wsColors: IWorkspaceColor[], config: ThemeConfiguration, options: ThemeJsonOptions): ThemeConfiguration => {
	config = merge({}, config);

	wsColors.forEach(wsColor => {
		let setColor: string;
		if (options.materialize) { setColor = NamedColor.Transparent; }
		else { setColor = wsColor.color; }
		config = merge({}, config, setColorDefinition(wsColor.scope, setColor));
	});

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