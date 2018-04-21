import { TokenGroup, ItalicsTheme, FontStyle } from '../models/index';

export const tokenGroups: TokenGroup[] = [
	{ 
		name: 'Magnolia',
		scopes: [
			"meta.brace",
			"punctuation.definition.array",
			"punctuation.definition.binding-pattern",
			"punctuation.definition.block",
			"punctuation.definition.dictionary",
			"punctuation.definition.string",
			"punctuation.definition.tag",
			"punctuation.curlybrace",
			"punctuation.fullstop",
			"punctuation.section",
			"punctuation.separator",
			"punctuation.support",
			"punctuation.terminator",
			"meta.structure.dictionary.json",
			"string.quoted.double.json"
		],
		style: {
			foreground: '#F6F0FF'
		},
	},
	{ 
		name: 'Electric Blue',
		scopes: [
			"support.variable",
			"variable",
			"support.type.property-name",
			"variable.other.object.property",
			"constant.other.table-name.sql",
			"meta.object-literal.key.js",
			"string.other.link.description.markdown"
		],
		style: {
			foreground: '#8DF9F9'
		},
	},
	{ 
		name: 'Sulu',
		scopes: [
			"keyword.var",
			"keyword.const",
			"constant",
			"keyword.struct",
			"keyword.interface",
			"keyword.function",
			"markup.inline.raw",
			"punctuation.parenthesis.named.begin.regexp",
			"punctuation.parenthesis.named.end.regexp",
			"punctuation.parenthesis.non-capturing.begin.regexp",
			"punctuation.parenthesis.non-capturing.end.regexp",
			"support.constant",
			"support.type",
			"support.class",
			"markup.inserted",
			"entity.name.type",
			"entity.name.class",
			"entity.other.inherited-class",
			"entity.other.attribute-name.id.css"
		],
		style: {
			foreground: '#97EE91'
		},
	},
	{ 
		name: 'Bali Hai',
		scopes: [
			"punctuation.terminator",
			"punctuation.section.function.begin.bracket.round.css",
			"punctuation.section.function.end.bracket.round.css",
			"punctuation.section.property-list.begin.bracket.curly.css",
			"punctuation.section.property-list.end.bracket.curly.css"
		],
		style: {
			foreground: '#919CB9'
		},
	},
	{ 
		name: 'Deluge',
		scopes: [
			"comment"
		],
		style: {
			foreground: '#8059A2'
		},
	},
	{ 
		name: 'Malibu',
		scopes: [
			"string",
			"markup.quote",
			"markup.bold",
			"markup.italic",
			"string.quoted.single.js",
			"string.quoted.double.js",
			"meta.link.inline.markdown",
			"meta.image.inline.markdown",
			"markup.underline.link",
			"entity.name.type.js"
		],
		style: {
			foreground: '#50DFFE'
		},
	},
	{ 
		name: 'Mauve',
		scopes: [
			"string.quoted.docstring",
			"storage.type.function",
			"keyword.type",
			"storage.type"
		],
		style: {
			foreground: '#E7ADFB'
		},
	},
	{ 
		name: 'Froly',
		scopes: [
			"entity.name.class",
			"entity.name.function",
			"entity.name.type",
			"entity.other.attribute-name",
			"entity.other.inherited-class",
			"markup.heading.setext",
			"meta.function-call.generic",
			"support.function",
			"support.other.escape.special.regexp"
		],
		style: {
			foreground: '#F36F98'
		},
	},
	{ 
		name: 'Rajah',
		scopes: [
			"entity.name.tag",
			"storage",
			"support.function.builtin",
			"variable.language",
			"constant.numeric",
			"variable.parameter",
			"markup.bold",
			"markup.underline",
			"markup.italic",
			"string.quoted.double.css",
			"punctuation.definition.string.css"
		],
		style: {
			foreground: '#F8C275'
		},
	},
	{ 
		name: 'Deep Blush',
		scopes: [
			"entity.name.section",
			"keyword",
			"punctuation.definition.heading",
			"punctuation.definition.keyword",
			"keyword.other.DML.sql",
			"constant.character.escape.markdown",
			"entity.other.attribute-name.class.css"
		],
		style: {
			foreground: '#E752A1'
		},
	},
	{ 
		name: 'Classic Rose',
		scopes: [
			"meta.brace",
			"punctuation.definition.arguments",
			"punctuation.definition.array",
			"punctuation.definition.begin.bracket",
			"punctuation.definition.binding-pattern",
			"punctuation.definition.block",
			"punctuation.definition.bracket",
			"punctuation.definition.dict",
			"punctuation.definition.dictionary",
			"punctuation.definition.end.bracket",
			"punctuation.definition.list",
			"punctuation.definition.parameters",
			"punctuation.definition.string",
			"punctuation.definition.tag",
			"punctuation.other.comma",
			"punctuation.other.period",
			"punctuation.section",
			"punctuation.separator",
			"punctuation.support",
			"punctuation.terminator",
			"meta.brace.square.js",
			"variable.other.object",
			"constant.other.database-name.sql"
		],
		style: {
			foreground: 'FBD3E1#'
		},
	},
	{ 
		name: 'Cranberry',
		scopes: [
			"punctuation.definition.template-expression",
			"punctuation.section.embedded",
			"storage",
			"markup.deleted",
			"markup.heading",
			"entity.name.section.markdown",
			"token.error-token"
		],
		style: {
			foreground: '#E34F8C'
		},
	},
	{ 
		name: 'Texas',
		scopes: [
			"markup.changed",
			"entity.name.filename.find-in-files",
			"markup.quote",
			"keyword.other.unit.px.css",
			"keyword.other.unit.fr.css",
			"keyword.other.unit.s.css",
			"keyword.other.unit.percentage.css"
		],
		style: {
			foreground: '#FAFAA0'
		},
	},
	{ 
		name: 'Perfume',
		scopes: [
			"markup.fenced_code.block.markdown",
			"keyword.type",
			"keyword.other.alias.sql",
			"meta.functiona.variable.css",
			"variable.argument.css",
			"constant.numeric.line-number.find-in-files - match"
		],
		style: {
			foreground: '#C7ADFB'
		},
	},
	{ 
		name: 'White Pointer',
		scopes: [
			"variable",
			"text.html.markdown",
			"support.constant.property-value.css"
		],
		style: {
			foreground: '#FCF6FF'
		},
	},
	{ 
		name: 'Jaffa',
		scopes: [
			"beginning.punctuation.definition.list.markdown",
			"constant.language.null",
			"constant.language.boolean.true",
			"constant.language.boolean.false",
			"entity.other.attribute-name.pseudo-element.css"
		],
		style: {
			foreground: '#F39B35'
		},
	},
	{ 
		name: 'Anakiwa',
		scopes: [
			"meta.link.inline.markdown",
			"meta.image.inline.markdown",
			"markup.underline.link"
		],
		style: {
			foreground: '#99ddff'
		},
	},
	{
		name: 'Bold',
		scopes: [
			"markup.bold.markdown",
			"punctuation.definition.bold.markdown"
		],
		style: {
			fontStyle: FontStyle.Bold
		}
	},
	{
		name: 'Underline',
		scopes: [
			"entity.other.inherited-class",
			"entity.name.type",
			"entity.name.class",
			"entity.other.inherited-class"
		]
	},
	{
		name: 'Basic Italics',
		scopes: [
			"markup.italic.markdown",
			"punctuation.definition.italic.markdown",
			"storage.type.function",
			"meta.functiona.variable.css",
			"variable.argument.css",
			"markup.quote",
			"entity.other.inherited-class",
			"entity.other.attribute-name.pseudo-element.css",
			"string.quoted.double.css",
			"punctuation.definition.string.css"
		],
		style: {
			fontStyle: FontStyle.Italics,
			excludeIn: [
				ItalicsTheme.None
			]
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