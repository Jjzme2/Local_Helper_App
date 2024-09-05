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

      <productLibrary :idsToInclude="featuredProducts"></productLibrary>

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
      },
      // Products
      showAllProducts: false,
      featuredProductIds: [
        '7511b0ff-75e4-4d90-a825-f35252c1f353', // Patriotic Tee with Eagle - Unisex
        'bce78e90-cec6-4e6a-909b-8028d80bdc62', // Galactic Constellations Tough Phone Case
        'd91e79fd-d1a1-4ff0-869b-15fccd4ab172', // Plush Blanket Winter Vibes Cabin Mountains Fleece
        '5115ca5d-ddac-44b8-aea9-84f702009196', // Sweet Dreams Swaddle Blanket
        'c6ef9a21-c6f3-4ec3-b96c-d8b9d5d04f8d', // Yuletide Glow Christmas Candle
        '45131698-321d-4f29-8dd4-08eb2d8cf839' // Magic Stirrer: Witchy Raccoon T-Shirt
      ]
    }
  },
  computed: {
    featuredProducts() {
      if (!this.showAllProducts) return this.featuredProductIds
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
