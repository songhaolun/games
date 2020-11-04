// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  
  // parser: 'babel-eslint',
  parserOptions: {
  sourceType: 'module',
  parser: 'babel-eslint',
  },
  env: {
  browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
  // 按从上往下的规则匹配
  //推荐校验
  "plugin:vue/recommended",
  //基本校验
  //"plugin:vue/essential",
  "standard"
  ],
  // required to lint *.vue files
  plugins: [
  'vue'
  ],
  // add your custom rules here
  'rules': {
  // allow paren-less arrow functions
  'arrow-parens': 0,
  // allow async-await
  'generator-star-spacing': 0,
  // allow debugger during development
  'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
