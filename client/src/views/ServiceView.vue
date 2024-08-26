<template>
  <BaseView>
    <template #default>
      <section class="container clear">
        <h2>Service View</h2>
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

import BaseView from '@/views/BaseView.vue'
import serviceCardFull from '@/components/app/mainElements/cards/Content_Cards/ServiceCards/ServiceCardFull.vue'

export default {
  name: 'ServiceView',
  components: {
    serviceCardFull,
    BaseView
  },
  setup() {
    const route = useRoute()
    const serviceStore = useServiceStore()
    const resource = computed(() => serviceStore.getItemById(route.params.serviceId))

    return {
      resource
    }
  },
  methods: {
    openRequest() {
      this.$router.push({ name: 'serviceRequest', params: { serviceId: this.resource.id } })
    }
  }
}
</script>
