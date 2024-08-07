# eslint-plugin-react-jsx-props-spread-first

A template for ESLint plugins.

## Installation

Use [npm](https://www.npmjs.com/) or a compatibility tool to install.

```
$ npm install --save-dev eslint eslint-plugin-react-jsx-props-spread-first
```

### Requirements

- Node.js v18.0.0 or newer versions.
- ESLint v8.57.0 or newer versions.

## Usage

Write your config file such as `.eslintrc.yml`.

```yml
plugins:
  - xxxx
rules:
  xxxx/example-rule: error
```

See also [Configuring ESLint](https://eslint.org/docs/user-guide/configuring).

## Configs

- `xxxx/recommended` ... enables the recommended rules.

## Rules

### Stylistic Issues

| Rule ID                                           | Description      |     |
| :------------------------------------------------ | :--------------- | :-: |
| [xxxx/example-rule](./docs/rules/example-rule.md) | An example rule. | ⭐️ |

## Semantic Versioning Policy

This plugin follows [Semantic Versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## Changelog

- [GitHub Releases]()

## Contributing

Welcome your contribution!

See also [ESLint Contribution Guide](https://eslint.org/docs/developer-guide/contributing/).

### Development Tools

- `npm test` runs tests.
- `npm run update` updates the package version. And it updates `src/configs/recommended.ts`, `lib/index.ts`, and `README.md`'s rule table. See also [npm version CLI command](https://docs.npmjs.com/cli/version).
- `npm run add-rule <RULE_ID>` creates three files to add a new rule.
