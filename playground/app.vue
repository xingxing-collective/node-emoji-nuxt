<template>
  <div>
    {{ $emoji.emojify("I :heart: :coffee:!") }}
  </div>
</template>

<script setup>
const emoji = useEmoji()
const foo = emoji.emojify('I :heart: :coffee:!')
// or useEmojify("I :heart: :coffee:!")
console.log(foo)

const bar = emoji.unemojify('I ❤️ ☕️!')
// or useUnemojify("I ❤️ ☕️!")
console.log(bar)
</script>
