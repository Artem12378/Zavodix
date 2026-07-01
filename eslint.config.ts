import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from 'eslint-config-prettier/flat'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts,mts,tsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  // Кастомные правила: отключаем строгое правило на двухсложные имена компонентов
  {
    name: 'app/custom-rules',
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },

  // 👇 НОВОЕ ПРАВИЛО – не ругается на экспорты и игнорирует переменные с _
  {
    name: 'app/typescript-rules',
    files: ['**/*.{ts,tsx,vue}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all', // проверяем все переменные
          args: 'after-used', // аргументы проверяем только если не используются после
          ignoreRestSiblings: true, // игнорируем деструктуризацию {...rest}
          argsIgnorePattern: '^_', // игнорировать аргументы, начинающиеся с _
          varsIgnorePattern: '^_', // игнорировать переменные, начинающиеся с _
        },
      ],
    },
  },

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

  skipFormatting,
)
