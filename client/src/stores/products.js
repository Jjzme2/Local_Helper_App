import { defineStore } from 'pinia'
import { products, categories } from '../_assets/products.js'
import model from '../_models/app_models/product.js'

export const useProductStore = defineStore('products', {
  state: () => ({
    items: products,
    categories: categories
  }),
  getters: {
    getItems: (state) => {
      const items = state.items.map((item) => {
        return new model(item)
      })
      return items
    },
    getCategories: (state) => {
      return state.categories
    },
    getItemById: (state) => (id) => {
      const item = state.items.find((item) => item.id === id)
      return new model(item)
    }
  }
})

export default useProductStore
