<template>
  <div>
    {{ $emoji.emojify("I :heart: :coffee:!") }}
  </div>
</template>

<script setup>
const emoji = useEmojify('I :heart: :coffee:!')
console.log(emoji)
const unemojify = useUnemojify(emoji)
console.log(unemojify)
</script>
