import { defineNuxtModule, addPlugin, createResolver, addImports } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'node-emoji-nuxt',
    configKey: 'node-emoji',
  },
  setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addPlugin({
      src: resolve('./runtime/plugin'),
    })

    nuxt.options.alias['#emoji'] = resolve('./runtime')

    const composables = [{
      name: 'useEmoji',
      as: 'useEmoji',
      from: resolve('./runtime/composables/emoji'),
    }, {
      name: 'useEmojify',
      as: 'useEmojify',
      from: resolve('./runtime/composables/emojify'),
    }, {
      name: 'useUnemojify',
      as: 'useUnemojify',
      from: resolve('./runtime/composables/unemojify'),
    }]
    addImports(composables)
  },
})
