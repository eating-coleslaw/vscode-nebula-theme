import { TokenGroup, ItalicsTheme, FontStyle } from '../models/index';

export const tokenGroups: TokenGroup[] = [
	{ 
		name: 'Magnolia',
		scopes: [],
		style: {
			foreground: '#F6F0FF'
		},
	},
	{ 
		name: 'Electric Blue',
		scopes: [],
		style: {
			foreground: '#8DF9F9'
		},
	},
	{ 
		name: 'Sulu',
		scopes: [],
		style: {
			foreground: '#97EE91'
		},
	},
	{ 
		name: 'Bali Hai',
		scopes: [],
		style: {
			foreground: '#919CB9'
		},
	},
	{ 
		name: 'Deluge',
		scopes: [],
		style: {
			foreground: '#8059A2'
		},
	},
	{ 
		name: 'Malibu',
		scopes: [],
		style: {
			foreground: '#50DFFE'
		},
	},
	{ 
		name: 'Mauve',
		scopes: [],
		style: {
			foreground: '#E7ADFB'
		},
	},
	{ 
		name: 'Froly',
		scopes: [],
		style: {
			foreground: '#F36F98'
		},
	},
	{ 
		name: 'Rajah',
		scopes: [],
		style: {
			foreground: '#F8C275'
		},
	},
	{ 
		name: 'Deep Blush',
		scopes: [],
		style: {
			foreground: '#E752A1'
		},
	},
	{ 
		name: 'Classic Rose',
		scopes: [],
		style: {
			foreground: 'FBD3E1#'
		},
	},
	{ 
		name: 'Cranberry',
		scopes: [],
		style: {
			foreground: '#E34F8C'
		},
	},
	{ 
		name: 'Texas',
		scopes: [],
		style: {
			foreground: '#FAFAA0'
		},
	},
	{ 
		name: 'Perfume',
		scopes: [],
		style: {
			foreground: '#C7ADFB'
		},
	},
	{ 
		name: 'White Pointer',
		scopes: [],
		style: {
			foreground: '#FCF6FF'
		},
	},
	{ 
		name: 'Jaffa',
		scopes: [],
		style: {
			foreground: '#F39B35'
		},
	},
	{ 
		name: 'Anakiwa',
		scopes: [],
		style: {
			foreground: '#99ddff'
		},
	},
	{ 
		name: 'Cornflower Blue',
		scopes: [],
		style: {
			foreground: '#6796e6'
		},
	},
	{ 
		name: 'Manhattan',
		scopes: [],
		style: {
			foreground: '#f2c88c'
		}
	},
	{
		name: 'Basic Italics',
		scopes: [],
		style: {
			fontStyle: FontStyle.Italics,
			excludeIn: [ ItalicsTheme.None ]
		}
	},
	{
		name: 'More Italics',
		scopes: [],
		style: {
			fontStyle: FontStyle.Italics,
			excludeIn: [ 
				ItalicsTheme.None,
				ItalicsTheme.Basic
			]
		}
	},
	{
		name: 'Operator Italics',
		scopes: [],
		style: {
			fontStyle: FontStyle.Italics,
			excludeIn: [
				ItalicsTheme.None,
				ItalicsTheme.Basic,
				ItalicsTheme.More
			]
		}
	}
];