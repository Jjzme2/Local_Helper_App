<template>
  <div class="product-carousel-wrapper">
    <carousel :items-to-show="1.5" class="custom-carousel">
      <slide v-for="product in products" :key="product.id" class="custom-slide">
        <div class="product-card">
          <img :src="getDefaultImage(product)" :alt="product.title" class="custom-product-icon" />
          <div class="custom-product-details">
            <h3 class="custom-product-title">{{ product.title }}</h3>
            <div class="custom-product-description" v-html="sanitizeDescription(product.description)"></div>
            <p class="custom-product-price">$ {{ priceMin(product) }}</p>
            <button class="custom-primary-button" @click="navigateToProduct(product)">Buy Now</button>
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation class="custom-navigation" />
        <pagination class="custom-pagination" />
      </template>
    </carousel>
  </div>
</template>

<script>
import DOMPurify from 'dompurify';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'ProductCarousel',
  components: { Carousel, Slide, Pagination, Navigation },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const priceMin = (product) => {
      if (!product || !product.variants || product.variants.length === 0) return '0.00';

      const minPrice = Math.min(...product.variants.map((variant) => variant.price));
      return (minPrice / 100).toFixed(2);
    };

    const getDefaultImage = (product) => {
      const defaultImage = product.images.find((image) => image.is_default);
      return defaultImage ? defaultImage.src : '';
    };

    const sanitizeDescription = (description) => {
      return DOMPurify.sanitize(description);
    };

    const navigateToProduct = (product) => {
      const url = product.external.handle;
      window.open(url, '_blank'); // Open in a new tab
    };

    return {
      priceMin,
      getDefaultImage,
      sanitizeDescription,
      navigateToProduct,
    };
  },
};
</script>
