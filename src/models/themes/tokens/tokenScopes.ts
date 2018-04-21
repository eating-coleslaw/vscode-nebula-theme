import{ TokenStyle } from './token';

export interface ITokenGroup {

	name: string;

	scopes?: string[];

	style?: TokenStyle;

}