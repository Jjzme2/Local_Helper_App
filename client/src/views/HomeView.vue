<template>
  <BaseView :includeGoHomeButton="false">
    <template #default>
      <alertBox
        v-if="developerMessage.show"
        :message="developerMessage.message"
        :type="developerMessage.type"
        :displayOnOpen="true"
        class="alert-box"
      ></alertBox>

      <section class="component-heading-container">
        <HeroImage />
      </section>

      <productLibrary></productLibrary>

      <NewsLetter />
    </template>
  </BaseView>
</template>
<script>
import BaseView from './BaseView.vue'
import alertBox from '@/components/app/mainElements/alerts/alertBox.vue'

// Libraries
import productLibrary from '@/components/app/mainElements/asset_libraries/ProductLibrary.vue'

import HeroImage from '@/components/app/mainElements/cards/HeroImage.vue'
import NewsLetter from '@/components/app/mainElements/tools/NewsLetter.vue'

export default {
  name: 'HomeView',
  components: {
    alertBox,
    BaseView,
    HeroImage,
    productLibrary,
    NewsLetter
  },
  data() {
    return {
      appName: import.meta.env.VITE_APP_NAME,
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
