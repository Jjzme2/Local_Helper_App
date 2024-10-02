<template>
  <BaseView>
    <template #default>
      <section class="container clear no-shadow">
        <h1 class="main-heading">About Us</h1>

        <p class="body-text">
          At <ImpactText>{{ appName }}</ImpactText
          >, we believe in creating unique, thoughtful designs that add beauty and meaning to your
          everyday life. Whether you're looking for creative fashion, stylish home decor, or unique
          accessories, each product is crafted with care and intention to resonate with your
          individuality.
        </p>

        <p class="body-text">
          <ImpactText>Our mission</ImpactText> is to provide high-quality, artistic products that
          allow you to express yourself and bring more inspiration into your world. From
          eco-friendly t-shirts and distinctive phone cases to elegant home accents, our designs are
          meant to help you make a statement in every facet of your life.
        </p>

        <p class="body-text">
          We're committed to delivering more than just products—we offer a piece of art and
          self-expression. Guided by <ItalicizedText>quality</ItalicizedText>,
          <ItalicizedText>creativity</ItalicizedText>, and <ItalicizedText>purpose</ItalicizedText>,
          our team works passionately to ensure that every design reflects our dedication to
          craftsmanship and aesthetic beauty.
        </p>

        <p class="body-text">
          Want to learn more? Follow our journey on <ImpactText>TikTok</ImpactText> at
          <a :href="tiktokLink" target="_blank">@Positive Echoes</a>, where we echo positivity and
          creativity in every post. We can't wait to share our story with you!
        </p>

        <p class="button-group">
          <a href="your-shop-link" class="primary-button">Shop Now</a>
          <a href="#contact-section" class="secondary-button">Contact Us</a>
        </p>
      </section>

      <section id="contact-section" class="container clear no-shadow">
        <h2>Get in Touch</h2>
        <p>
          If you have any questions or want to learn more about our products and services, feel free
          to reach out.
        </p>
        <ul class="contact-details">
          <li>
            Email: <a :href="`mailto:${mailingAddress}`">{{ mailingAddress }}</a>
          </li>
          <!-- <li>Phone: {{ contactNumber }}</li> -->
        </ul>
      </section>
      <EmployeeLibrary />
    </template>
  </BaseView>
</template>

<script>
import BaseView from './BaseView.vue'
import ImpactText from '@/components/app/subElements/text/ImpactText.vue'
import ItalicizedText from '@/components/app/subElements/text/ItalicizedText.vue'

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
    return {
      appName: import.meta.env.VITE_APP_NAME,
      mailingAddress: import.meta.env.VITE_SERVICES_EMAIL,
      tiktokLink: import.meta.env.VITE_TIKTOK_LINK,
      contactNumber: import.meta.env.VITE_CONTACT_NUMBER
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
