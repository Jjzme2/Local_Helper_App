<template>
  <BaseView>
    <template #default>
      <div class="container clear no-shadow">
        <p class="body-text">
          At <strong>ILYTAT Services</strong>, we believe that everyone deserves access to quality
          services tailored to their unique needs. Whether you're looking for professional
          assistance, reliable support, or specialized solutions, we're here to help you achieve
          your goals efficiently and affordably.
        </p>

        <p class="body-text">
          <strong>Our mission is simple</strong>: to provide a range of high-quality services that
          deliver real value. From seasonal yard work and car detailing to recurring grocery
          delivery and one-time tasks, we offer everything you need to keep your life running
          smoothly. We understand that your time and resources are precious, which is why we strive
          to offer competitive pricing and transparent estimates, ensuring you get the best service
          without any hidden surprises.
        </p>

        <p class="body-text">
          With a focus on customer satisfaction, our team is dedicated to meeting your needs with
          professionalism, integrity, and a commitment to excellence. We're passionate about helping
          you succeed, whether it’s through keeping your landscape pristine, your car spotless, or
          your pantry stocked. We're here to support you every step of the way.
        </p>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from './BaseView.vue'

export default {
  //   name: "NewView",
  components: {
    BaseView
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
