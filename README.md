# eslint-config-priver

Shareable config for [eslint]. Uses rules from [`eslint-plugin-import`], [`eslint-plugin-compat`], [`eslint-plugin-react`] and [`eslint-plugin-node`].

## Installation

Install the correct versions of each package, which are listed by the command:

```bash
yarn info eslint-config-priver peerDependencies
# or
npm info eslint-config-priver peerDependencies
```

Then install install this package:

```bash
yarn add eslint-config-priver --dev
# or
npm install eslint-config-priver --save-dev
```

## Usage

### Basic

Add the following in your `.eslintrc.json`:

```json
{
    "root": true,
    "extends": "eslint-config-priver"
}
```

### React

Add the following in your `.eslintrc.json`:

```json
{
    "root": true,
    "extends": "eslint-config-priver/react",
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
    "extends": "eslint-config-priver/node"
}
```

[eslint]: http://eslint.org/
[`eslint-plugin-import`]: https://github.com/benmosher/eslint-plugin-import
[`eslint-plugin-compat`]: https://github.com/amilajack/eslint-plugin-compat
[`eslint-plugin-react`]: https://github.com/davidtheclark/stylelint-selector-bem-pattern
[`eslint-plugin-node`]: https://github.com/mysticatea/eslint-plugin-node
