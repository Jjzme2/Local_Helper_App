<template>
  <section class="product-library" id="productLibrary">
    <div class="container clear no-shadow" v-if="isPromotionActive">
      <PromotionText
        :percentOff="promotion.discount"
        :startDate="promotion.startDate"
        :endDate="promotion.endDate"
        :message="promotion.message"
        :category="promotion.category"
      />
    </div>

    <div v-if="products.length > 0">
      <h3>Products</h3>
      <ProductCarousel :products="products" />
      <div class="container clear no-shadow">
        <a class="primary-button" :href="shopURL" target="_blank">View full store</a>
      </div>
    </div>

    <div v-else class="loading-message">
      <LoadingIcon />
      <p>Loading products...</p>
    </div>
  </section>
</template>

<script>
import { computed, ref, watch, onBeforeMount } from 'vue'
import { useProductStore } from '@/stores/products'
import PromotionText from '@/components/app/subElements/text/PromotionText.vue'
import ProductCarousel from '@/components/app/mainElements/products/ProductCarousel.vue' // Import the carousel component
import LoadingIcon from '@/components/app/mainElements/general/display/LoadingIcon.vue'

export default {
  name: 'ProductLibrary',
  components: {
    PromotionText,
    ProductCarousel, // Add the carousel component here
    LoadingIcon
  },
  setup() {
    const productStore = useProductStore()
    const products = computed(() => productStore.getLimitedItems)
    const shopURL = import.meta.env.VITE_PRODUCT_URL

    onBeforeMount(() => {
      if (products.value.length === 0) {
        productStore.fetchLimited(10) // Only fetch the top 10
      }
    })

    const promotion = ref({
      discount: 10,
      startDate: '2024-09-01',
      endDate: '2024-09-07',
      message: 'September Special',
      category: 'apparel'
    })

    const isPromotionActive = computed(() => {
      const today = new Date()
      return (
        today >= new Date(promotion.value.startDate) && today <= new Date(promotion.value.endDate)
      )
    })

    watch(
      products,
      (newProducts) => {
        if (newProducts.length === 0) {
          productStore.fetchLimited(10)
        }
      },
      { immediate: true }
    )

    return {
      products,
      shopURL,
      isPromotionActive,
      promotion
    }
  }
}
</script>

<style scoped>
.loading-message {
  text-align: center;
  font-size: 1.2em;
  color: #666;
}
</style>
