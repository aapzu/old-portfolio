var OFF = 0, WARN = 1, ERROR = 2;

module.exports = exports = {

	extends: [
		'eslint:recommended',
		'plugin:react/recommended'
	],

	root: true,

	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			modules: true,
			experimentalObjectRestSpread: true
		}
	},

	env: {
		es6: true,
		node: true,
		browser: true
	},

	plugins: [
		'react'
	],

	rules: {
		'no-console': [
			2,
			{
				allow: [
					'warn',
					'error',
					'info'
				]
			}
		],
		semi: [ERROR, 'never'],
		'no-unused-vars': ERROR,
		'curly': [ERROR, 'all'],
		'keyword-spacing': [ERROR, {
			'before': true,
			'after': true
		}],
		'quotes': [ERROR, 'single'],
		'space-before-function-paren': [ERROR, 'never'],
		'space-before-blocks': [ERROR, 'always'],
		'space-in-parens': ['error', 'never'],
		'space-unary-ops': [ERROR, {
			'words': true,
			'nonwords': false
		}],
		'brace-style': [ERROR, '1tbs'],
		'newline-per-chained-call': [ERROR, {
			'ignoreChainWithDepth': 2
		}],
		'object-curly-newline': [ERROR, {
			"ObjectExpression": "always",
			"ObjectPattern": "never"
		}],
		'indent': [ERROR, 4, {
			'SwitchCase': 1,
			"MemberExpression": 1,
			"ObjectExpression": 1
		}],
		'object-property-newline': [ERROR, {
			'allowMultiplePropertiesPerLine': true
		}],
		'no-unexpected-multiline': ERROR,
	}

}