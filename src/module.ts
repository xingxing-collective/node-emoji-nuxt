import { defineNuxtModule, addPlugin, createResolver, addImports } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'node-emoji-nuxt',
    configKey: 'node-emoji',
  },
  setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const runtimeDir = resolve('runtime')

    addPlugin({
      src: resolve(runtimeDir, 'plugin.ts'),
    })

    nuxt.options.alias['#emoji'] = resolve(runtimeDir, 'composables/emoji')

    const composables = [{
      name: 'useEmoji',
      as: 'useEmoji',
      from: resolve(runtimeDir, 'composables/emoji'),
    }, {
      name: 'useEmojify',
      as: 'useEmojify',
      from: resolve(runtimeDir, 'composables/emojify'),
    }, {
      name: 'useUnemojify',
      as: 'useUnemojify',
      from: resolve(runtimeDir, 'composables/unemojify'),
    }]
    addImports(composables)
  },
})
