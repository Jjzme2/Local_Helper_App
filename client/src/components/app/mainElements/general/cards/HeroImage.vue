<template>
  <div class="card no-background no-shadow centered">
    <div class="card-inner">
      <h1>Discover Unique, Thoughtful Designs</h1>
      <img class="cover-image" src="/images/logo.png" alt="Hero Image" />
      <p>
        Unique. Creative. <span><em>Yours.</em></span>
      </p>

      <div class="button-group">
        <form :action="shopURL" target="_blank">
          <button type="submit" class="button primary">Shop Now</button>
        </form>
        <button @click="scrollToFeatures" class="button secondary">Learn More</button>
      </div>
    </div>
  </div>
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
