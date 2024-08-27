<template>
  <BaseView>
    <template #default>
      <div class="container clear no-shadow">
        <p class="body-text">
          At <ImpactText>ILYTAT Services</ImpactText>, we believe that everyone deserves access to
          quality services tailored to their unique needs. Whether you're looking for professional
          assistance, reliable support, or specialized solutions, we're here to help you achieve
          your goals efficiently and affordably.
        </p>

        <p class="body-text">
          <ImpactText>Our mission is simple</ImpactText>: to provide a range of high-quality
          services that deliver real value. From seasonal yard work and car detailing to recurring
          grocery delivery and one-time tasks, we offer everything you need to keep your life
          running smoothly. We understand that your time and resources are precious, which is why we
          strive to offer competitive pricing and transparent estimates, ensuring you get the best
          service without any hidden surprises.
        </p>

        <p class="body-text">
          With a focus on customer satisfaction, our team is dedicated to meeting your needs with
          <ItalicizedText>professionalism</ItalicizedText>,
          <ItalicizedText>integrity</ItalicizedText>, and a
          <ItalicizedText>commitment to excellence</ItalicizedText>. We're passionate about helping
          you succeed, whether it’s through keeping your landscape pristine, your car spotless, or
          your pantry stocked. We're here to support you every step of the way.
        </p>
      </div>
      <EmployeeLibrary />
    </template>
  </BaseView>
</template>

<script>
import BaseView from './BaseView.vue'
import ImpactText from '@/components/app/mainElements/text/ImpactText.vue'
import ItalicizedText from '@/components/app/mainElements/text/ItalicizedText.vue'

import EmployeeLibrary from '@/components/app/mainElements/asset_libraries/EmployeeLibrary.vue'

export default {
  //   name: "NewView",
  components: {
    BaseView,
    ImpactText,
    ItalicizedText,
    EmployeeLibrary
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
