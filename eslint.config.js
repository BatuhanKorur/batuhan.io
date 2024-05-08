import antfu from '@antfu/eslint-config'

export default antfu({
	vue: true,
	yaml: false,
	rules: {
		'no-console': 'off',
	},
	stylistic: {
		indent: 'tab',
		quotes: 'single',
	},
	ignores: ['**/*.md'],
}, {
	files: ['**/*.vue'],
	languageOptions: {
		globals: {
			useI18n: 'readonly',
			useRoute: 'readonly',
			useLocalePath: 'readonly',
			useSchemaOrg: 'readonly',
			useContent: 'readonly',
			defineArticle: 'readonly',
		},
	},
	rules: {
		'vue/custom-event-name-casing': 'off',
		'vue/max-attributes-per-line': ['error', {
			singleline: {
				max: 2,
			},
			multiline: {
				max: 1,
			},
		}],
	},
})
