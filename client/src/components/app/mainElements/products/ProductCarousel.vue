<template>
  <div class="centered">
    <carousel
      v-bind="config"
      :items-to-show="productsToShowPerCarouselView"
    >
      <slide class="carousel__item" v-for="product in products" :key="product.id">
		<ProductSlide :product="product"></ProductSlide>
      </slide>

      <template #addons>
        <navigation class="custom-navigation" />
        <pagination class="custom-pagination" />
      </template>
    </carousel>
  </div>
</template>

<script>
// import DOMPurify from 'dompurify'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import ProductSlide from './ProductSlide.vue';

export default {
  name: 'ProductCarousel',
  components: { ProductSlide, Carousel, Slide, Pagination, Navigation },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  setup() {
    const config = {
      autoplay: 1750,
      wrapAround: true,
      pauseAutoplayOnHover: true
    }

    const productsToShowPerCarouselView = 12.5

    return {
      config,
      productsToShowPerCarouselView,
    }
  }
}
</script>
