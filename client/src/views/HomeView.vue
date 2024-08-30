<template>
  <BaseView :includeGoHomeButton="false">
    <template #default>
      <!-- Developer Message Alert -->
      <alertBox
        v-if="developerMessage.show"
        :message="developerMessage.message"
        :type="developerMessage.type"
        :displayOnOpen="true"
        class="alert-box"
      ></alertBox>

      <section class="component-heading-container">
        <h1 class="component-heading-main">ILYTAT Services</h1>

        <p class="component-heading-sub">Connecting you with reliable local services.</p>

        <greeting></greeting>
      </section>

      <productLibrary></productLibrary>

      <div class="container">
        <serviceLibrary :idsToInclude="idsToShow"></serviceLibrary>

        <div class="container clear no-shadow">
          <a class="primary-button" @click="showAllServices = !showAllServices">
            {{ showAllServices ? 'View Featured Services' : 'View All Services' }}</a
          >
        </div>
      </div>
    </template>
  </BaseView>
</template>
<script>
import BaseView from './BaseView.vue'
import alertBox from '@/components/app/mainElements/alerts/alertBox.vue'
import greeting from '@/components/app/mainElements/display/GreetingHome.vue'

// Libraries
import serviceLibrary from '@/components/app/mainElements/asset_libraries/ServiceLibrary.vue'
import productLibrary from '@/components/app/mainElements/asset_libraries/ProductLibrary.vue'

export default {
  name: 'HomeView',
  components: {
    alertBox,
    BaseView,
    greeting,
    serviceLibrary,
    productLibrary
  },
  data() {
    return {
      developerMessage: {
        show: 0,
        message: 'Welcome to the Home View',
        type: 'info'
      },
      showAllServices: false,
      featuredServiceIds: [
        'bbcf0e3f-41b5-4383-b480-d1db3fa9a3fd',
        '3e7d1e2b-1f3b-4e2b-8c5e-7b4e7d2f3b6c',
        'e6b4c5d8-7d6b-4e5a-9c9e-1c1e6e7d6b4c'
      ]
    }
  },
  computed: {
    idsToShow() {
      if (!this.showAllServices) return this.featuredServiceIds
      else return []
    }
  }
}
</script>

<style scoped>
.home-message {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: var(--primary-text-color);
}
</style>
