module.exports = {
  "extends": [
    "airbnb-base"
  ],
  "settings": {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".test.js", ".test.ts"]
      }
    }
  },
  "rules": {
    "accessor-pairs": "error",
    "array-bracket-newline": "off",
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "array-callback-return": "off",
    "array-element-newline": "off",
    "arrow-body-style": "off",
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "arrow-spacing": [
      "error",
      {
        "after": true,
        "before": true
      }
    ],
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": [
      "error",
      "1tbs"
    ],
    "callback-return": "off",
    "camelcase": [
      "error",
      {
        "properties": "never"
      }
    ],
    "capitalized-comments": "off",
    "class-methods-use-this": "error",
    "comma-dangle": "off",
    "comma-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "complexity": "off",
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "consistent-return": "off",
    "consistent-this": "off",
    "curly": "error",
    "default-case": "error",
    "dot-location": [
      "error",
      "property"
    ],
    "dot-notation": [
      "off",
      {
        "allowKeywords": true
      }
    ],
    "eol-last": "error",
    "eqeqeq": "error",
    "for-direction": "error",
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "func-names": [
      "error",
      "never"
    ],
    "func-style": "off",
    "function-paren-newline": "off",
    "generator-star-spacing": "error",
    "getter-return": "error",
    "global-require": "off",
    "guard-for-in": "error",
    "handle-callback-err": "off",
    "id-blacklist": "error",
    "id-length": "off",
    "id-match": "error",
    "indent": "off",
    "indent-legacy": "off",
    "init-declarations": "off",
    "jsx-quotes": "error",
    "key-spacing": "error",
    "keyword-spacing": [
      "error",
      {
        "after": true,
        "before": true
      }
    ],
    "line-comment-position": "off",
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-around-comment": "off",
    "lines-around-directive": "off",
    "lines-between-class-members": "error",
    "max-depth": "error",
    "max-len": "off",
    "max-lines": "off",
    "max-nested-callbacks": "error",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "error",
    "multiline-comment-style": "off",
    "new-cap": "off",
    "new-parens": "error",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "off",
    "no-buffer-constructor": "off",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-confusing-arrow": "error",
    "no-console": ["error", { "allow": ["warn", "error", "log"] }],
    "no-continue": "error",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "off",
    "no-empty": "warn",
    "no-empty-function": "off",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": "off",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "off",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "off",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-mixed-operators": "off",
    "no-mixed-requires": "off",
    "no-multi-assign": "off",
    "no-multi-spaces": "error",
    "no-multi-str": "off",
    "no-multiple-empty-lines": "error",
    "no-native-reassign": "error",
    "no-negated-condition": "off",
    "no-negated-in-lhs": "error",
    "no-nested-ternary": "error",
    "no-new": "off",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-path-concat": "off",
    "no-plusplus": "off",
    "no-process-env": "off",
    "no-process-exit": "off",
    "no-proto": "error",
    "no-prototype-builtins": "off",
    "no-regex-spaces": "off",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-properties": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sync": "off",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unexpected-multiline": "off",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "off",
    "no-unused-expressions": "off",
    "no-use-before-define": "off",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "off",
    "no-useless-escape": "off",
    "no-var": "off",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": "off",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-property-newline": "off",
    "object-shorthand": "off",
    "one-var": "off",
    "one-var-declaration-per-line": [
      "error",
      "initializations"
    ],
    "operator-assignment": "off",
    "operator-linebreak": "error",
    "padded-blocks": "off",
    "padding-line-between-statements": "error",
    "prefer-arrow-callback": "off",
    "prefer-const": "off",
    "prefer-destructuring": "off",
    "prefer-numeric-literals": "error",
    "prefer-promise-reject-errors": "off",
    "prefer-reflect": "off",
    "prefer-rest-params": "off",
    "prefer-template": "off",
    "quote-props": "off",
    "quotes": [
      "off",
      "single"
    ],
    "radix": "off",
    "require-await": "warn",
    "require-jsdoc": "error",
    "rest-spread-spacing": "error",
    "semi": "error",
    "semi-spacing": "error",
    "semi-style": [
      "error",
      "last"
    ],
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "error",
    "space-before-function-paren": "off",
    "space-in-parens": "off",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": [
      "off",
      "always"
    ],
    "strict": "off",
    "switch-colon-spacing": "error",
    "symbol-description": "error",
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "template-tag-spacing": "error",
    "unicode-bom": [
      "error",
      "never"
    ],
    "valid-jsdoc": "off",
    "wrap-regex": "off",
    "yield-star-spacing": "error",
    "yoda": "off",
    "import/order": "off"
  },

  /**
   * Typescript Rules
   */
  "overrides": [{
    "files": ["*.ts", "*.tsx"],
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "extends": [
      "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
      "import/extensions": "off",
      "import/order": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-use-before-define": "off"
    }
  }]
};
