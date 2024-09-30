<template>
  <component :is="'h' + level">{{ text }}</component>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      default: 2 // Default to <h2> if not specified
    }
  }
}
</script>
