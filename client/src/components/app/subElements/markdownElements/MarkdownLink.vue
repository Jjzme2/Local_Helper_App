<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">{{ text }}</a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
