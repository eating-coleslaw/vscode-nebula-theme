import { FontStyle } from '../../models';

export const commentScope: string[] = [
	"comment"
];

export const basicScopes: string[] = [
	"entity.other.attribute-name.pseudo-element.css",
	"entity.other.inherited-class",
	"markup.italic.markdown",
	"markup.quote",
	"meta.function.variable.css",
	"punctuation.definition.italic.markdown",
	"punctuation.definition.string.css",
	"storage.type.function",
	"string.quoted.double.css",
	"variable.argument.css"
];

/**
 * Copied from Material Palenight - Italics
 */
export const moreScopes: string[] = [
	"assignment.coffee",
	"entity.name.function.ts",
	"entity.name.function.tsx",
	"entity.name.tag.custom",
	"entity.name.type.ts",
	"entity.other.attribute-name",
	"italic",
	"keyword.control",
	"keyword.operator.type.annotation",
	"modifier",
	"punctuation.section.embedded",
	"quote",
	"source.js.jsx keyword.control.flow.js",
	"storage.type.class",
	"support.function.basic_functions",
	"support.type.primitive",
	"support.type.property.css",
	"this",
	"type.function",
	"variable.assignment.coffee"
];

/**
 * Copied from Material Palenight - Operator
 */
export const operatorScopes: string[] = [
	"constant.language",
	"constant.other.color.rgb-value.hex.css",
	"constant.other.rgb-value.css",
	"entity.name.tag.doctype",
	"entity.name.tag.yaml",
	"keyword",
	"keyword.operator.expression.typeof",
	"language",
	"meta.export.js variable.other",
	"meta.export.ts meta.block.ts variable.other.readwrite.alias.ts",
	"meta.export.tsx meta.block.tsx variable.other.readwrite.alias.tsx",
	"meta.import.js variable.other",
	"meta.import.ts meta.block.ts variable.other.readwrite.alias.ts",
	"meta.import.tsx meta.block.tsx variable.other.readwrite.alias.tsx",
	"meta.object-literal.key",
	"meta.parameter",
	"meta.parameters",
	"meta.tag.sgml.doctype",
	"meta.tag.sgml.doctype.html",
	"meta.var.expr storage.type",
	"parameter",
	"source.json meta.structure.dictionary support.type.property-name.json",
	"storage",
	"string",
	"support.constant.math",
	"support.constant.vendored.property-value.css",
	"support.type.property-name.css",
	"support.type.vendored.property-name.css",
	"type.var",
	"variable.language",
	"variable.object.property.js",
	"variable.object.property.jsx",
	"variable.object.property.ts",
	"variable.object.property.tsx",
	"variable.other.less",
	"variable.parameter",
	"variable.parameter.url.sass",
	"variable.parameter.url.scss",
	"variable.sass",
	"variable.scss"
];

/**
 * Basically everything
 */
export const noRestraintScopes: string[] = [
	".type",
	"constant.character",
	"constant.other",
	"emphasis",
	"entity.name.tag.script.html",
	"entity.other.attribute-name.pseudo-class.css",
	"entity.other.attribute-name.pseudo-selector.css",
	"entity.other.inherited-class entity.name.type.module",
	"entity.other.less.mixin",
	"markup.italic",
	"meta.diff",
	"meta.diff.header",
	"meta.selector.css entity.other.attribute-name.class",
	"punctuation.definition.blockquote.markdown",
	"punctuation.definition.comment",
	"source.java storage.type.annotation",
	"storage.modifier",
	"storage.type",
	"storage.type.annotation",
	"storage.type.class.js",
	"string.quoted.docstring",
	"string.regexp",
	"support.class",
	"support.constant",
	"support.module",
	"support.node",
	"support.type",
	"text.html.markdown",
	"variable.language.this",
	"variable.language.this.js"
];

export const setCommentItalicsObject = (enabled: boolean = true) => {
	if (!enabled) { return { tokenColors: [] }; }
	let obj = { tokenColors: [] };
	if (enabled) {
		obj.tokenColors = [
			{
				name: 'comment',
				scope: ['comment'],
				settings: { fontStyle: 'italic' }
			}
		];
	}

	return obj;
};

export const getBasicItalicsObject = () => {
	let obj = { tokenColors: [] };
	obj.tokenColors = [
		{
			name: 'Basic Italics',
			scope: [
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
			settings: { fontStyle: FontStyle.Italics }	
		}
	];

	return obj;
};

export const getMoreItalicsObject = () => {
	let obj = { tokenColors: [] };
	obj.tokenColors = [
		{
			name: 'More Italics',
			scope: [],
			settings: { fontStyle: FontStyle.Italics }
		}
	];

	return obj;
};

export const getOperatorItalicsObject = () => {
	let obj = { tokenColors: [] };
	obj.tokenColors = [
		{
			name: 'More Italics',
			scope: [],
			settings: { fontStyle: FontStyle.Italics }
		}
	];

	return obj;
};