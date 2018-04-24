import merge = require('lodash.merge');
import { ITokenGroup, FontStyle } from '../../models';

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
	"punctuation.definition.string.css"
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