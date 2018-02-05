# eslint-config-priver

Shareable config for [eslint]. Uses rules from [`eslint-plugin-import`], [`eslint-plugin-react`] and [`eslint-plugin-node`].

[![build status](https://img.shields.io/travis/priver/eslint-config/master.svg?style=flat-square)](https://travis-ci.org/priver/eslint-config)
[![npm version](https://img.shields.io/npm/v/@priver/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@priver/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@priver/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@priver/eslint-config)
[![license](https://img.shields.io/github/license/priver/eslint-config.svg?style=flat-square)](https://github.com/priver/eslint-config/blob/master/LICENSE.txt)

## Installation

Install the correct versions of each package, which are listed by the command:

```bash
yarn info @priver/eslint-config peerDependencies
# or
npm info @priver/eslint-config peerDependencies
```

Then install install this package:

```bash
yarn add @priver/eslint-config --dev
# or
npm install @priver/eslint-config --save-dev
```

## Usage

### Basic

Add the following in your `.eslintrc.json`:

```json
{
    "root": true,
    "extends": "@priver/eslint-config"
}
```

### React

Add the following in your `.eslintrc.json`:

```json
{
    "root": true,
    "extends": "@priver/eslint-config/react",
    "settings": {
        "react": {
            "version": "15.0"
        }
    }
}
```

By default the latest React stable release is used.

### Node

Add the following in your `.eslintrc.json`:

```json
{
    "root": true,
    "extends": "@priver/eslint-config/node"
}
```

[eslint]: http://eslint.org/
[`eslint-plugin-import`]: https://github.com/benmosher/eslint-plugin-import
[`eslint-plugin-react`]: https://github.com/yannickcr/eslint-plugin-react
[`eslint-plugin-node`]: https://github.com/mysticatea/eslint-plugin-node
