import { defineStore } from 'pinia'

import { services, categories } from '@assets/services.js'
import model from '@models/app_models/service.js'
import modelAlt from '@models/app_models/ServiceCategory.js'

export const useServiceStore = defineStore('services', {
  state: () => ({
    items: services,
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
      const items = state.categories.map((item) => {
        return new modelAlt(item)
      })
      return items
    },
    getItemById: (state) => (id) => {
      const item = state.items.find((item) => item.id === id)
      return new model(item)
    }
  }
})

export default useServiceStore
