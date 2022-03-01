module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "sourceType": "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "alloy",
    "alloy/react",
    "alloy/typescript"
  ],
  plugins: ['react-hooks'],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: [2, 'always'],
    'quote-props': 'off',
    // 结尾必须有逗号(主要缓解增加一行对象属性，导致 git 变更记录是两行的情况)
    'comma-dangle': ['error', 'always-multiline'],
    'block-spacing': ['error', 'always'],
    'no-cond-assign': ['error'],
    'max-params': ['error', 5], //  函数最大参数为5个
    "react/jsx-key": 2, //在数组或迭代器中验证JSX具有key属性
    "react/no-danger": 0, //防止使用危险的JSX属性
    "react/no-did-mount-set-state": 0, //防止在componentDidMount中使用setState
    "react/no-did-update-set-state": 1, //防止在componentDidUpdate中使用setState
    "react/no-direct-mutation-state": 2, //防止this.state的直接变异
    "react/no-multi-comp": 2, //防止每个文件有多个组件定义
    "react/sort-comp": 2, //强制组件方法顺序
  },
  settings: {
    "import/resolver": "node",
    "react": {
      "version": "detect"
    }
  }
};
