<template>
  <div class="main-layout">
    <header class="header" v-if="showHeader">
      <layoutHeader></layoutHeader>
    </header>

    <main class="body">
      <slot></slot>
    </main>

    <footer class="footer" v-if="$slots.footer">
      <layoutFooter></layoutFooter>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import layoutHeader from '@/components/app/layoutElements/LayoutHeader.vue'
import layoutFooter from '@/components/app/layoutElements/LayoutFooter.vue'

export default {
  name: 'LayoutMain',
  components: {
    layoutHeader,
    layoutFooter
  },
  setup() {
    const showHeader = ref(false)

    const handleScroll = () => {
      showHeader.value = window.scrollY > 100 // Change 100 to the desired scroll position
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      showHeader
    }
  }
}
</script>
