<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Discover Unique, Thoughtful Designs</h1>
      <img src="/images/logo.png" alt="Hero Image" />
      <p>Beautiful products made with care – from fashion to home decor.</p>
      <div class="hero-buttons">
        <a :href="shopURL" class="primary-button" target="_blank">Shop Now</a>
        <button @click="scrollToFeatures" class="secondary-button">Learn More</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroImage',
  setup() {
    const shopURL = import.meta.env.VITE_PRODUCT_URL

    return { shopURL }
  },
  methods: {
    scrollToFeatures() {
      const featuresSection = document.getElementById('productLibrary')
      //   const newsletterSection = document.getElementById('newsletterSignup')
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
