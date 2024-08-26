<template>
  <div>
    <img src="/images/logo.png" alt="logo" class="header-logo" />

    <button @click="toggleNav" class="primary-button" style="float: right">
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

    <div class="centered" :class="{ 'is-visible': isNavVisible }">
      <navigationPanel v-if="isNavVisible" :routes="customRoutes"></navigationPanel>
    </div>
  </div>
</template>

<script>
import navigationPanel from '@/components/app/mainElements/panels/NavigationPanel.vue'
import NavigationOption from '@/_models/app_models/NavigationOption.js'

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
        new NavigationOption('Contact Us', 'contact'),
        new NavigationOption('Request new Service', 'unlistedService'),
        new NavigationOption('About Us', 'about')
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
