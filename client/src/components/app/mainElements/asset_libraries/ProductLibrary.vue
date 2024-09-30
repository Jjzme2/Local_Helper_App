<template>
  <section class="product-library" id="productLibrary">
    <hr class="divider" />

    <CountdownTimer
      :targetDate="new Date('2024-10-05T10:00:00')"
      displayText="Something Spooky (and cute) is coming October 5th, 2024!"
    />

    <div class="container clear no-shadow">
      <PromotionText
        v-if="isPromotionActive"
        :percentOff="promotion.discount"
        :startDate="promotion.startDate"
        :endDate="promotion.endDate"
        :message="promotion.message"
        :category="promotion.category"
      />
    </div>

    <div class="product-highlights" v-if="products.length > 0">
      <h3>Products</h3>
      <div class="grid-container">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          :imagePath="getImagePath(product)"
          @navigate="sendToURL(product)"
        />
      </div>

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
import PromotionText from '../text/PromotionText.vue'
import CountdownTimer from '@/components/app/mainElements/display/CountdownDisplay.vue'
import ProductCard from '@/components/app/mainElements/cards/ProductCard.vue'
import LoadingIcon from '@/components/app/mainElements/display/LoadingIcon.vue'

export default {
  name: 'ProductLibrary',
  components: {
    PromotionText,
    CountdownTimer,
    ProductCard,
    LoadingIcon
  },
  setup() {
    const productStore = useProductStore()
    const products = computed(() => productStore.getVisibleItems)
    const shopURL = import.meta.env.VITE_PRODUCT_URL

    onBeforeMount(() => {
      if (products.value.length === 0) {
        productStore.fetchVisible()
      }
    })

    const promotion = ref({
      discount: 10,
      startDate: '2024-09-01',
      endDate: '2024-09-07',
      message: 'September Special',
      category: 'apparel'
    })

    const getImagePath = (product) => `images/app/products/${product.imageName}.png`

    const isPromotionActive = computed(() => {
      const today = new Date()
      return (
        today >= new Date(promotion.value.startDate) && today <= new Date(promotion.value.endDate)
      )
    })

    // Fetch products if they are not already loaded
    watch(
      products,
      (newProducts) => {
        if (newProducts.length === 0) {
          productStore.fetchItems()
        }
      },
      { immediate: true }
    )

    const sendToURL = (product) => {
      const addressToNavigateTo = product.url || shopURL
      window.open(addressToNavigateTo.includes('https') ? addressToNavigateTo : shopURL, '_blank')
    }

    return {
      products,
      shopURL,
      getImagePath,
      isPromotionActive,
      promotion,
      sendToURL
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
