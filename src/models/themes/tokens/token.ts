import { FontStyle } from '../fontStyle';
import { ItalicsTheme } from '../italicThemes';

export interface TokenStyle {

	foreground?: string;

	fontStyle?: FontStyle;

	excludeIn?: ItalicsTheme[];

}