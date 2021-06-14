import { IWorkspaceColor, ThemeConfiguration, ThemeJsonOptions } from '../../models/index';

export const getWorkspaceColorDefinitions = (wsColors: IWorkspaceColor[], config: ThemeConfiguration, options: ThemeJsonOptions): ThemeConfiguration => {
	let colors = {};

	wsColors.forEach(wsColor => {
		let setColor: string;

		if (options.materialize) {
			setColor = wsColor.materialize ? NamedColor.Transparent : wsColor.color;
		} else {
			setColor = wsColor.color;
		}

		colors[wsColor.scope] = setColor;
	});

	config.colors = colors;

	return config;
};

const enum NamedColor {
	Transparent = '#0000'
}