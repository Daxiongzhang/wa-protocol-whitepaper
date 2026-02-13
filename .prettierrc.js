module.exports = {
  // 基础配置
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  
  // JSX 配置
  jsxSingleQuote: true,
  jsxBracketSameLine: false,
  
  // 格式化配置
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  
  // 特殊文件处理
  quoteProps: 'as-needed',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  
  // 插件配置
  plugins: ['prettier-plugin-tailwindcss'],
  
  // Tailwind CSS 类名排序
  tailwindConfig: './tailwind.config.js',
  tailwindAttributes: ['class', 'className'],
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  
  // 覆盖配置
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 80,
        tabWidth: 2
      }
    },
    {
      files: '*.md',
      options: {
        printWidth: 80,
        proseWrap: 'always'
      }
    },
    {
      files: '*.yml',
      options: {
        tabWidth: 2,
        singleQuote: false
      }
    }
  ]
};
