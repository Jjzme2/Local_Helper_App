<template>
  <div>
    <div class="tabs">
      <div v-for="(tab, index) in tabs" :key="index" @click="activeTab = index" class="tab">
        {{ tab.name }}
      </div>
    </div>
    <component :is="tabs[activeTab].component" v-bind="tabs[activeTab].params"></component>
  </div>
</template>

<script>
import DirectoryTab from '@/_models/app_models/DirectoryTab'
export default {
  data() {
    return {
      activeTab: 0
    }
  },
  components: {},
  props: {
    tabs: {
      type: [DirectoryTab],
      required: true
    }
  }
}
</script>
