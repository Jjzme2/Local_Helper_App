<template>
  <div>
    <div class="container v-small no-border no-shadow" style="float: left">
      <img src="/images/logo.png" alt="logo" class="icon" />
    </div>

    <button @click="toggleNav" class="button primary no-padding" style="float: right; width: 15%">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </button>
  </div>

  <div :class="{ 'is-visible': isNavVisible }">
    <navigationPanel v-if="isNavVisible" :routes="customRoutes"></navigationPanel>
  </div>
</template>

<script>
import navigationPanel from '@/components/app/mainElements/general/panels/NavigationPanel.vue'
import NavigationOption from '@models/app_models/NavigationOption.js'

export default {
  name: 'LayoutHeader',
  components: {
    navigationPanel
  },
  data() {
    return {
      isNavVisible: false,
      customRoutes: [
        new NavigationOption('Home', 'home'),
        new NavigationOption('Blog', 'blog'),
        // new NavigationOption('Videos', 'VideoLibrary'),
        new NavigationOption('Contact', 'contact'),
        new NavigationOption('About', 'about')
      ]
    }
  },
  methods: {
    toggleNav() {
      this.isNavVisible = !this.isNavVisible
    }
  }
}
</script>
