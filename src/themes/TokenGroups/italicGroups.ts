import { FontStyle } from '../../models';

export const commentScope: string[] = [
	"comment"
];

export const basicScopes: string[] = [
	"markup.italic.markdown",
	"punctuation.definition.italic.markdown",
	"storage.type.function",
	"meta.functiona.variable.css",
	"variable.argument.css",
	"markup.quote",
	"entity.other.inherited-class",
	"entity.other.attribute-name.pseudo-element.css",
	"string.quoted.double.css",
	"punctuation.definition.string.css",
	"support.function.builtin"
];

/**
 * Copied from Material Palenight - Italics
 */
export const moreScopes: string[] = [
	"entity.name.function.ts",
	"entity.name.function.tsx",
	"support.type.primitive",
	"entity.other.attribute-name",
	"entity.name.tag.custom",
	"source.js.jsx keyword.control.flow.js",
	"support.type.property.css",
	"support.function.basic_functions",
	"variable.assignment.coffee",
	"support.function.basic_functions",
	"keyword.operator.type.annotation",
	"punctuation.section.embedded",
	"assignment.coffee",
	"entity.name.type.ts",
	"italic",
	"quote",
	"type .function",
	"type.function",
	"storage.type.class",
	"keyword.control",
	"modifier",
	"this"
];

/**
 * Copied from Material Palenight - Italics
 */
export const operatorScopes: string[] = [
	"source.json meta.structure.dictionary support.type.property-name.json",
	"support.type.property-name.css",
	"support.type.vendored.property-name.css",
	"support.constant.vendored.property-value.css",
	"meta.import.ts meta.block.ts variable.other.readwrite.alias.ts",
	"meta.import.tsx meta.block.tsx variable.other.readwrite.alias.tsx",
	"meta.import.js variable.other",
	"meta.export.ts meta.block.ts variable.other.readwrite.alias.ts",
	"meta.export.tsx meta.block.tsx variable.other.readwrite.alias.tsx",
	"meta.export.js variable.other",
	"entity.name.function.ts",
	"entity.name.function.tsx",
	"support.type.primitive",
	"entity.name.tag.yaml",
	"entity.other.attribute-name",
	"meta.tag.sgml.doctype.html",
	"entity.name.tag.doctype",
	"meta.tag.sgml.doctype",
	"entity.name.tag.custom",
	"source.js.jsx keyword.control.flow.js",
	"support.type.property.css",
	"support.function.basic_functions",
	"constant.other.color.rgb-value.hex.css",
	"constant.other.rgb-value.css",
	"variable.assignment.coffee",
	"support.function.basic_functions",
	"keyword.operator.expression.typeof",
	"punctuation.section.embedded",
	"keyword.operator.type.annotation",
	"variable.object.property.ts",
	"variable.object.property.js",
	"variable.object.property.jsx",
	"variable.object.property.tsx",
	"assignment.coffee",
	"entity.name.type.ts",
	"support.constant.math",
	"meta.object-literal.key",
	"meta.var.expr storage.type",
	"variable.scss",
	"variable.sass",
	"variable.other.less",
	"variable.parameter.url.scss",
	"variable.parameter.url.sass",
	"parameter",
	"string",
	"italic",
	"quote",
	"keyword",
	"storage",
	"language",
	"constant.language",
	"variable.language",
	"type .function",
	"type.function",
	"storage.type.class",
	"type.var",
	"meta.parameter",
	"variable.parameter",
	"meta.parameters",
	"keyword.control",
	"modifier",
	"this"
];

/**
 * Basically everything
 */
export const noRestraintScopes: string[] = [
	"entity.other.attribute-name",
	"support.function.basic_functions",
	"storage.type",
	"entity.other.inherited-class",
	"markup.quote",
	"storage",
	"markup.italic",
	"variable.parameter",
	"assignment.coffee",
	"entity.name.function.ts",
	"entity.name.function.tsx",
	"entity.name.tag.custom",
	"entity.name.type.ts",
	"italic",
	"keyword",
	"keyword.control",
	"keyword.operator.type.annotation",
	"modifier",
	"punctuation.section.embedded",
	"quote",
	"source.js.jsx keyword.control.flow.js",
	"storage.type.class",
	"support.type.primitive",
	"support.type.property.css",
	"this",
	"type .function",
	"type.function",
	"variable.assignment.coffee",
	"entity.other.attribute-name.pseudo-element.css",
	"support.class",
	"support.type",
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
	"meta.var.expr storage.type",
	"parameter",
	"string",
	"support.constant.math",
	"type.var",
	"markup.italic.markdown",
	"meta.functiona.variable.css",
	"punctuation.definition.italic.markdown",
	"punctuation.definition.string.css",
	"storage.type.function",
	"string.quoted.double.css",
	"variable.argument.css",
	"emphasis",
	"entity.other.inherited-class entity.name.type.module",
	"punctuation.definition.comment",
	"source.java storage.type.annotation",
	"storage.modifier",
	"storage.type.annotation",
	"storage.type.class.js",
	"string.quoted.docstring",
	"support.module",
	"support.node",
	"variable.language.this",
	"variable.language.this.js",
	"comment",
	"text.html.markdown",
	".type",
	"comment.block.html",
	"constant.character",
	"constant.other",
	"entity.name.tag.script.html",
	"entity.other.attribute-name.pseudo-class.css",
	"entity.other.attribute-name.pseudo-selector.css",
	"entity.other.less.mixin",
	"meta.selector.css entity.other.attribute-name.class",
	"punctuation.definition.blockquote.markdown",
	"string.regexp",
	"support.constant",
	"meta.diff",
	"meta.diff.header",
	"constant.language",
	"constant.other.color.rgb-value.hex.css",
	"constant.other.rgb-value.css",
	"entity.name.tag.doctype",
	"entity.name.tag.yaml",
	"keyword.operator.expression.typeof",
	"meta.tag.sgml.doctype",
	"meta.tag.sgml.doctype.html",
	"source.json meta.structure.dictionary support.type.property-name.json",
	"support.constant.vendored.property-value.css",
	"support.type.property-name.css",
	"support.type.vendored.property-name.css",
	"variable.language",
	"variable.object.property.js",
	"variable.object.property.jsx",
	"variable.object.property.ts",
	"variable.object.property.tsx",
	"variable.other.less",
	"variable.parameter.url.sass",
	"variable.parameter.url.scss",
	"variable.sass",
	"variable.scss"
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