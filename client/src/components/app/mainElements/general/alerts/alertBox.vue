<template>
  <div v-if="visible" class="alert-box" :class="type">
    <span class="alert-icon">{{ icon }}</span>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'alertBox',
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    },
    duration: {
      type: Number,
      required: false,
      default: 3000 // Default duration is 3000ms (3 seconds)
    }
  },
  computed: {
    icon() {
      switch (this.type) {
        case 'warning':
          return '❕'
        case 'error':
          return '❌'
        case 'success':
          return '✅'
        case 'info':
          return 'ℹ️'
        default:
          return ''
      }
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.$emit('update:visible', false)
        }, this.duration)
      }
    }
  }
}
</script>
