<template>
  <div class="content-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentCard'
}
</script>

<style scoped>
.content-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 600px;
  margin: 0 auto;
}
</style>
