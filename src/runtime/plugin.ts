import * as emoji from 'node-emoji'
import { defineNuxtPlugin } from '#app'

declare module '#app' {
  interface NuxtApp {
    $emoji: typeof emoji
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $emoji: typeof emoji
  }
}

export default defineNuxtPlugin(async nuxtApp => nuxtApp.provide('emoji', emoji))
