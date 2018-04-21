import{ TokenStyle } from './token';

export interface TokenGroup {

	name: string;

	scopes?: string[];

	style?: TokenStyle;

}