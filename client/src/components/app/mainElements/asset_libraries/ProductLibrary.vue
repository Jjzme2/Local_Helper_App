<template>
  <section class="product-library" id="productLibrary">
    <h2>Our Products</h2>

    <hr class="divider" />

    <div class="container clear no-shadow">
      <PromotionText
        v-if="promotionActive"
        :percentOff="promotion.discount"
        :startDate="promotion.startDate"
        :endDate="promotion.endDate"
        :message="promotion.message"
        :category="promotion.category"
      />
    </div>

    <div class="product-highlights">
      <h3>Product Highlights</h3>
      <div class="grid-container">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card">
          <a :href="product.url" target="_blank">
            <img class="product-icon" :src="getImagePath(product)" :alt="product.name" />
          </a>
          <p class="product-details">{{ product.description }}</p>
        </div>
      </div>
    </div>

    <div class="container clear no-shadow">
      <a class="primary-button" :href="shopURL" target="_blank">View our store</a>
    </div>
  </section>
</template>

<script>
import { computed, ref } from 'vue'
import { useProductStore } from '@/stores/products'
import PromotionText from '../text/PromotionText.vue'

export default {
  name: 'ProductLibrary',
  components: {
    PromotionText
  },
  props: {
    idsToInclude: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const productStore = useProductStore()

    const products = computed(() => productStore.getItems)
    const categories = computed(() => productStore.getCategories)
    const shopURL = ref(import.meta.env.VITE_PRODUCT_URL)

    const promotion = ref({
      discount: 10,
      startDate: '2024-09-01',
      endDate: '2024-09-07',
      message: 'September Special',
      category: 'apparel'
    })

    const getImagePath = (product) => `images/app/products/${product.imageName}.png`

    const filteredProducts = computed(() => {
      if (props.idsToInclude.length === 0 || props.idsToInclude.length > 6) {
        return products.value.slice(0, 6) // Show only the top 6 products
      }
      return products.value.filter((product) => props.idsToInclude.includes(product.id))
    })

    const promotionActive = computed(() => {
      const today = new Date()
      const startDate = new Date(promotion.value.startDate)
      const endDate = new Date(promotion.value.endDate)

      return today >= startDate && today <= endDate
    })

    return {
      products,
      shopURL,
      categories,
      getImagePath,
      filteredProducts,
      promotionActive,
      promotion
    }
  },
  methods: {
    sendToURL(product) {
      const addressToNavigateTo = product.url
      if (product.url.includes('https')) {
        window.open(addressToNavigateTo, '_blank')
      } else {
        window.open(import.meta.env.VITE_PRODUCT_URL)
      }
    }
  }
}
</script>
