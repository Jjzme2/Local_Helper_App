<template>
  <mainLayout>
    <template #header v-if="includeHeader"></template>
    <template #default>
      <div class="main-content">
        <goBackButton v-if="includeGoHomeButton" />
        <slot></slot>
      </div>
    </template>
    <template #footer v-if="includeFooter"></template>
  </mainLayout>
  <alertBox
    v-if="alertVisible"
    :message="alertMessage"
    :type="alertType"
    v-model:visible="alertVisible"
    :duration="alertDuration"
  ></alertBox>
</template>

<script>
import mainLayout from '@/components/app/layoutElements/LayoutMain.vue'
import goBackButton from '@/components/app/mainElements/buttons/GoToButton.vue'

import alertBox from '@/components/app/mainElements/alerts/alertBox.vue'

import emitter from '@/_services/utilities/eventBus'

export default {
  name: 'BaseView',
  components: {
    mainLayout,
    goBackButton,
    alertBox
  },
  props: {
    includeHeader: {
      type: Boolean,
      default: true
    },
    includeFooter: {
      type: Boolean,
      default: true
    },
    includeGoHomeButton: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      alertMessage: '',
      alertType: 'info',
      alertVisible: false,
      alertDuration: 3000 // Default duration is 3000ms (3 seconds)
    }
  },
  methods: {
    showAlert(message, type = 'info', duration = 3000) {
      this.alertMessage = message
      this.alertType = type
      this.alertDuration = duration
      this.alertVisible = true
    }
  },
  created() {
    emitter.on('trigger-alert', this.showAlert)
  },
  beforeUnmount() {
    emitter.off('trigger-alert', this.showAlert)
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
