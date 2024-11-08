<template>
  <BaseView :includeGoHomeButton="false">
    <template #default>
      <!-- Alert Box, for //* developerMessage -->
      <alertBox
        v-if="developerMessage.show"
        :message="developerMessage.message"
        :type="developerMessage.type"
        :displayOnOpen="true"
        class="alert-box"
      ></alertBox>

      <!-- LTO Popup -->
      <!-- <StickyElement
        position="top"
        :zIndex="2000"
        backgroundColor="lightgrey"
        :threshold="100"
        @close="handleClose"
      >
        <template #header>Limited Time Offer!</template>
        <template #default>
          <CountdownTimer
            :targetDate="new Date('2024-10-05T10:00:00')"
            displayText="Something Spooky (and cute) is coming October 5th, 2024!"
        /></template>
      </StickyElement> -->

      <!-- Hero Image -->
      <div>
        <HeroImage />
      </div>

      <!-- Libraries -->
      <hr class="divider" />

      <productLibrary></productLibrary>

      <!-- Sign up -->
      <NewsLetter />
    </template>
  </BaseView>
</template>
<script>
import BaseView from './BaseView.vue'
// Optional displays
import alertBox from '@/components/app/mainElements/general/alerts/alertBox.vue'

// import StickyElement from '@/components/app/mainElements/general/display/StickyElement.vue'
// import CountdownTimer from '@/components/app/mainElements/general/display/CountdownDisplay.vue'

// Libraries
import productLibrary from '@/components/app/mainElements/products/ProductLibrary.vue'

// Other
import HeroImage from '@/components/app/mainElements/general/cards/HeroImage.vue'
import NewsLetter from '@/components/app/mainElements/general/tools/NewsLetter.vue'

export default {
  name: 'HomeView',
  components: {
    // Optional
    alertBox,
    // StickyElement,
    // CountdownTimer,
    // Common
    BaseView,
    HeroImage,
    // Libraries
    productLibrary,
    // Signup
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
