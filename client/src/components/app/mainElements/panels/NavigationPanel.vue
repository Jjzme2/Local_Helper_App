<template>
  <div class="nav-panel">
    <button
      v-for="route in routes"
      :key="route.name"
      @click="showComponent(route.pathTo)"
      class="primary-button"
    >
      {{ route.readableName }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavigationPanel',
  props: {
    routes: {
      type: Array,
      required: true,
      // Require that it have two keys: name and path
      validator: (value) => {
        // Must be an array of NavigationOption objects
        return value.every((item) => {
          return item.type === 'NavigationOption'
        })
      }
    }
  },
  methods: {
    showComponent(path) {
      this.$router.push({ name: path })
    }
  }
}
</script>
