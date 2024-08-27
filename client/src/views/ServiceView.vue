<template>
  <BaseView>
    <template #default>
      <section class="container clear">
        <!-- Showcase items here -->
        <showcase :items="showcaseItems" />
        <serviceCardFull :service="resource" />
        <button class="primary-button centered" @click="openRequest">Request Service</button>
      </section>
    </template>
  </BaseView>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import useServiceStore from '@/stores/services'
import useShowcaseStore from '@/stores/showcases'

import BaseView from '@/views/BaseView.vue'
import serviceCardFull from '@/components/app/mainElements/cards/Content_Cards/ServiceCards/ServiceCardFull.vue'
import showcase from '@/components/app/mainElements/panels/ShowcasePanel.vue'

export default {
  name: 'ServiceView',
  components: {
    showcase,
    serviceCardFull,
    BaseView
  },
  setup() {
    const route = useRoute()
    const serviceStore = useServiceStore()
    const showcaseStore = useShowcaseStore()

    const resource = computed(() => serviceStore.getItemById(route.params.serviceId))
    const showcaseItems = computed(() => showcaseStore.getItemsByServiceId(route.params.serviceId))
    return {
      resource,
      showcaseItems
    }
  },
  methods: {
    openRequest() {
      this.$router.push({ name: 'serviceRequest', params: { serviceId: this.resource.id } })
    }
  }
}
</script>
