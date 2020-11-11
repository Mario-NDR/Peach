module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true,
    "jest": true
  },
  "rules": {
    // https://eslint.org/docs/rules/
    "no-bitwise": ["off"],
    "no-console": ["off"],
    "no-plusplus": ["off"],
    "no-loop-func": ["off"],
    "no-nested-ternary": ["off"],
    "no-unused-vars": ["warn"],
    "no-restricted-globals": ["off"],
    "no-param-reassign": ["off"],
    "no-else-return": ["off"],
    "no-return-assign": ["off"],
    "no-trailing-spaces": ["warn", { "skipBlankLines": true, "ignoreComments": true }],
    "no-underscore-dangle": ["off"],
    "no-useless-constructor": ["off"],
    "no-lonely-if": ["off"],
    "no-confusing-arrow": ["off"],
    "no-case-declarations": ["off"],
    // "comma-dangle": ["error", "never"],
    "comma-dangle": ["off"],
    // "max-len": ["error", { "code": 120, "tabWidth": 2, "comments": 120 }],
    "max-len": ["off"],
    "semi": ["error", "never"],
    "linebreak-style": ["off"],
    "guard-for-in": ["off"],
    "padded-blocks": ["off"],
    "arrow-parens": ["off"],
    "arrow-body-style": ["off"],
    "object-curly-newline": ["off"],
    "array-bracket-spacing": ["warn", "always"],
    "array-callback-return": ["off"],
    "class-methods-use-this": ["off"],
    "function-paren-newline": ["off"],
    "prefer-destructuring": ["off"],
    "camelcase": ["off"],
    "consistent-return": ["off"],

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/
    "jsx-a11y/anchor-is-valid": ["off"],
    "jsx-a11y/label-has-for": ["off"],
    "jsx-a11y/interactive-supports-focus": ["off"],
    "jsx-a11y/click-events-have-key-events": ["off"],
    "jsx-a11y/no-noninteractive-element-interactions": ["off"],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/
    "import/no-mutable-exports": ["off"],
    "import/prefer-default-export": ["off"],
    "import/no-extraneous-dependencies": ["off"], // For the sake of src/node_modules
    "import/extensions": ["off"],

    // https://github.com/yannickcr/eslint-plugin-react
    "react/prefer-stateless-function": [ "off", { "ignorePureComponents": true }],
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "react/no-unused-prop-types": ["off"],
    "react/forbid-prop-types": ["off"],
    "react/no-multi-comp": ["off"],
    "react/no-this-in-sfc": ["off"],
    "react/jsx-indent": ["off"],
    "react/jsx-boolean-value": ["off"],
    "react/sort-comp": ["off"],
    "react/no-array-index-key": ["off"],
    "react/destructuring-assignment": ["off"],
    "react/jsx-first-prop-new-line": ["off"],
    "react/jsx-one-expression-per-line": ["off"],
    "react/jsx-closing-tag-location": ["off"],
  },
  "settings": {
    "import/resolver": "webpack"
  },
  "globals": {
    "_": false
  }
}
