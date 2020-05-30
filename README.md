# Scorum JavaScript Style Guide

[![Build Status](https://github.com/scorum/javascript/workflows/Node%20CI/badge.svg)](https://github.com/scorum/javascript/actions)

A shared ESLint config with opinions about code style

## Installation & Usage

Create an `.eslintrc` file that extends this config. For more configuration options, check out the [ESLint docs](https://eslint.org/docs/user-guide/configuring).

### Base

```bash
npm install --save-dev eslint babel-eslint eslint-config-airbnb-base eslint-config-scorum
```

```json
{
  "extends": "scorum"
}
```

### React

```bash
npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-config-scorum
```

```json
{
  "extends": "scorum/react"
}
```

### Usage (extra)

If you need to override or turn off rules:

If you need to override a rule, your `.eslintrc.json` file should look like the example below. All shared rules will be used, but `eqeqeq` will be turned off.

```json
{
  "extends": "scorum",
  "rules": {
    "eqeqeq": "off"
  }
}
```
