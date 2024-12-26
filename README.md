# Emoji Nuxt Module

> Friendly emoji lookups and parsing utilities for Node.js. 💖

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

[Node Emoji](https://github.com/omnidan/node-emoji) Nuxt Module supporting v3

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 &nbsp;Online playground](https://stackblitz.com/github/xingxing-collective/node-emoji-nuxt?file=playground%2Fapp.vue)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Quick Setup

1. Add `node-emoji-nuxt` dependency to your project

```bash
npx nuxi@latest module add node-emoji
```

2. Add `node-emoji-nuxt` to the `modules` section of `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: [
    'node-emoji-nuxt'
  ]
})
```

## Basic Usage

You can use the provided `$emoji` to access node-emoji-nuxt in template.

```vue
<template>
  <div>
    {{ $emoji.emojify("I :heart: :coffee:!") }}
  </div>
</template>
```

## Composables

You can use the useEmoji,useEmojify and useUnemojify composable to access node-emoji-nuxt anywhere.

```ts
const emoji = useEmoji()
emoji.emojify("I :heart: :coffee:!") // 'I ❤️ ☕️!'
// or use the useEmojify composable

emoji.unemojify('The 🦄 is a fictitious animal.') // 'The :unicorn: is a fictitious animal.'
// or use the useUnemojify composable
```
## API

### emoji.emojify(input, options?)

Parse all markdown-encoded emojis in a string.

Parameters:

1. **`input`** (`string`): The input string containing the markdown-encoding emojis.
1. **`options`** _(optional)_:
   - **`fallback`** (`string`; default: `""`): The string to fallback to if an emoji was not found.
   - **`format`** (`() => (emoji: string, part: string, string: string) => string`; default: `value => value`): Add a middleware layer to modify each matched emoji after parsing.

```ts
const emoji = useEmoji()

console.log(emoji.emojify('The :unicorn: is a fictitious animal.'))
// 'The 🦄 is a fictitious animal.'
```

### emoji.find(emoji)

Get the name and character of an emoji.

Parameters:

1. **`emoji`** (`string`): The emoji to get the data of.

```ts
const emoji = useEmoji()

console.log(emoji.find('🦄'))
// { name: 'unicorn', emoji: '🦄' }
```

### emoji.get(name)

Get an emoji from an emoji name.

Parameters:

1. **`name`** (`string`): The name of the emoji to get.

```ts
const emoji = useEmoji()

console.log(emoji.get('unicorn'))
// '🦄'
```

### emoji.has(emoji)

Check if this library supports a specific emoji.

Parameters:

1. **`emoji`** (`string`): The emoji to check.

```ts
const emoji = useEmoji()

console.log(emoji.has('🦄'))
// true
```

### emoji.random()

Get a random emoji.

```ts
const emoji = useEmoji()

console.log(emoji.random())
// { name: 'unicorn', emoji: '🦄' }
```

### emoji.replace(input, replacement)

Replace the emojis in a string.

Parameters:

- **`input`** (`string`): The input string.
- **`replacement`** (`string | (emoji: string, index: number, string: string) => string`): The character to replace the emoji with.
  Can be either a string or a callback that returns a string.

```ts
const emoji = useEmoji()

console.log(emoji.replace('The 🦄 is a fictitious animal.', 'unicorn'))
// 'The unicorn is a fictitious animal.'
```

### emoji.search(keyword)

Search for emojis containing the provided name in their name.

Parameters:

1. **`keyword`** (`string`): The keyword to search for.

```ts
const emoji = useEmoji()

console.log(emoji.search('honey'))
// [ { name: 'honeybee', emoji: '🐝' }, { name: 'honey_pot', emoji: '🍯' } ]
```

### emoji.strip(input, options?)

Remove all of the emojis from a string.

Parameters:

1. **`input`** (`string`): The input string to strip the emojis from.
1. **`options`** _(optional)_:

   - **`preserveSpaces`** (`boolean`): Whether to keep the extra space after a stripped emoji.

```ts
const emoji = useEmoji()

console.log(emoji.strip('🦄 The unicorn is a fictitious animal.'))
// 'The unicorn is a fictitious animal.'

console.log(
  emoji.strip('🦄 The unicorn is a fictitious animal.', {
    preserveSpaces: true,
  }),
)
// ' The unicorn is a fictitious animal.'
```

### emoji.unemojify(input)

Convert all emojis in a string to their markdown-encoded counterparts.

Parameters:

1. **`input`** (`string`): The input string containing the emojis.

```ts
const emoji = useEmoji()

console.log(emoji.unemojify('The 🦄 is a fictitious animal.'))
// 'The :unicorn: is a fictitious animal.'
```

### emoji.which(emoji, options?)

Get an emoji name from an emoji.

Parameters:

1. **`emoji`** (`string`): The emoji to get the name of.
1. **`options`** _(optional)_:
   - **`markdown`** (`boolean`; default: `false`): Whether to return a `":emoji:"` string instead of `"emoji"`

```ts
const emoji = useEmoji()

console.log(emoji.which('🦄'))
// 'unicorn'
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/node-emoji-nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/node-emoji-nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/node-emoji-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/node-emoji-nuxt
[license-src]: https://img.shields.io/npm/l/node-emoji-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/node-emoji-nuxt
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com