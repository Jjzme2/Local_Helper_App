<template>
  <section>
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
    <div class="container grid-container clear no-shadow">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-card grid-item"
        @click="sendToURL(product)"
      >
        <img class="product-icon" :src="getImagePath(product)" :alt="product.name" />
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
  data() {
    return {
      promotion: {
        discount: 10,
        startDate: '2024-09-01',
        endDate: '2024-09-07',
        message: 'September Special',
        category: 'apparel'
      }
    }
  },
  props: {
    idsToInclude: {
      type: Array,
      default: () => []
    }
  },
  setup(props, data) {
    const productStore = useProductStore()

    const products = computed(() => productStore.getItems)
    const categories = computed(() => productStore.getCategories)
    const shopURL = ref(import.meta.env.VITE_PRODUCT_URL)

    const getImagePath = (product) => `images/app/products/${product.imageName}.png`

    const filteredProducts = computed(() => {
      if (props.idsToInclude.length === 0) {
        return products.value
      }
      return products.value.filter((product) => props.idsToInclude.includes(product.id))
    })

    const promotionActive = computed(() => {
      const today = new Date()
      const startDate = new Date(data.promotion.value.startDate)
      const endDate = new Date(data.promotion.value.endDate)

      return today >= startDate && today <= endDate
    })

    return {
      products,
      shopURL,
      categories,
      getImagePath,
      filteredProducts,
      promotionActive
    }
  },
  methods: {
    sendToURL(product) {
      const addressToNavigateTo = product.url
      console.log(product)
      window.open(addressToNavigateTo, '_blank')
    }
  },
  computed: {
    truncatedName() {
      return (product) => {
        if (product.name.length > 20) {
          return product.name.substring(0, 20) + '...'
        }
        return product.name
      }
    }
  }
}
</script>
