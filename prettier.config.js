export default {
  // 基础配置
  semi: true, // 句尾添加分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 对象属性按需添加引号
  trailingComma: 'es5', // 尾随逗号（ES5 兼容）

  // 缩进和换行
  tabWidth: 2, // 缩进宽度
  useTabs: false, // 使用空格而非Tab
  printWidth: 80, // 每行字符数限制

  // JSX 相关
  jsxSingleQuote: true, // JSX 使用单引号
  bracketSameLine: false, // JSX 标签闭合括号另起一行

  // 其他
  bracketSpacing: true, // 对象大括号内添加空格
  arrowParens: 'avoid', // 箭头函数参数括号（单参数时省略）
  endOfLine: 'lf', // 行尾字符（LF）

  // 插件配置
  plugins: [],

  // 文件覆盖配置
  overrides: [
    {
      files: '*.json',
      options: {
        singleQuote: false, // JSON 文件使用双引号
      },
    },
    {
      files: '*.md',
      options: {
        printWidth: 100, // Markdown 文件更宽的行长度
        proseWrap: 'always', // 总是换行
      },
    },
  ],
};
