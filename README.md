# Scorum JavaScript Style Guide

[![Build Status](https://github.com/scorum/javascript/workflows/Node%20CI/badge.svg)](https://github.com/scorum/javascript/actions)

Shared ESLint config for Scorum projects

## Principles

Our lint rules are to help us write bug-free, readable and maintainable code.
Rules are usually added because the patterns they are checking for have been proven to be problematic
and frequently come up in code reviews.
The intention is to save both authors and reviewers time by providing the author early feedback at the time of writing.

## Installation

### Required Dependencies

Required dependencies for ALL configs

```bash
# dependencies only for all configs

npm install --save-dev eslint eslint-config-scorum
```

### Base Dependencies

Additionall dependencies for `base` config

```bash
# dependencies only for base config

npm install --save-dev eslint babel-eslint eslint-config-scorum eslint-plugin-import
```

### React Dependencie

Additionall dependencies for `react` config

```bash
# dependencies only for react config

npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

### Ramda Dependencies

Additionall dependencies for `ramda` config

```bash
# dependencies only for ramda config

npm install --save-dev eslint-plugin-ramda
```

### Jest Dependencies

Additionall dependencies for `jest` config

```bash
# dependencies only for jest config

npm install --save-dev eslint-plugin-ramda
```

### Prettier Dependencies

Additionall dependencies for `prettier` config

```bash
# dependencies only for prettier config

npm install --save-dev prettier eslint-plugin-prettier
```

## Usage

Create an `.eslintrc` file that extends this config. For more configuration options, check out the [ESLint docs](https://eslint.org/docs/user-guide/configuring).

### Base

```json
{
  "extends": "scorum"
}
```

### React

```json
{
  "extends": "scorum/react"
}
```

### Node

```json
{
  "extends": "scorum/node"
}
```

### Server

Server config includes `base` and `node` configs

```json
{
  "extends": "scorum/server"
}
```

### Client

This config for vanilla JS (includes `base` config)

```json
{
  "extends": "scorum/client"
}
```

### Jest

```json
{
  "extends": "scorum/jest"
}
```

### Ramda

```json
{
  "extends": "scorum/ramda"
}
```

### Prettier (react support)

```json
{
  "extends": [
    "scorum/prettier",
    "scorum/prettier/react",
  ]
}
```

### Override rules

If you need to override or turn off rules:

If you need to override a rule, your `.eslintrc.json` file should look like the example below. All shared rules will be used, but `eqeqeq` will be turned off.

```json
{
  "extends": "scorum",
  "rules": {
    "eqeqeq": "off"
  },
  "env": {},
  "globals": {},
  "rules": {}
}
```

### ToDo

* [ ] Add automatically bumping package version [release-it](https://github.com/release-it/release-it/blob/master/docs/github-releases.md)
