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

      <hr class="divider" />
      <serviceLibrary></serviceLibrary>

      <hr class="divider" />
      <locationLibrary></locationLibrary>
    </template>
  </BaseView>
</template>
<script>
import BaseView from './BaseView.vue'
import alertBox from '@/components/app/mainElements/alerts/alertBox.vue'
import greeting from '@/components/app/mainElements/display/GreetingHome.vue'

// Libraries
import serviceLibrary from '@/components/app/mainElements/asset_libraries/ServiceLibrary.vue'
import locationLibrary from '@/components/app/mainElements/asset_libraries/LocationLibrary.vue'

export default {
  name: 'HomeView',
  components: {
    alertBox,
    BaseView,
    greeting,
    serviceLibrary,
    locationLibrary
  },
  data() {
    return {
      developerMessage: {
        show: 0,
        message: 'Welcome to the Home View',
        type: 'info'
      }
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
