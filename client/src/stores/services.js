import { defineStore } from 'pinia'

import { services, categories } from '../_assets/services.js'
import model from '../_models/app_models/service.js'
import modelAlt from '../_models/app_models/ServiceCategory.js'

export const useServiceStore = defineStore('services', {
  state: () => ({
    items: services,
    categories: categories
  }),
  getters: {
    getItems: (state) => {
      const items = state.items.map((item) => {
        console.log(new model(item))
        return new model(item)
      })
      return items
    },
    getCategories: (state) => {
      const items = state.categories.map((item) => {
        return new modelAlt(item)
      })
      return items
    }
  }
})

export default useServiceStore
