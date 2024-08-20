import { defineStore } from 'pinia'

import { services } from '../assets/services.js'
import model from '../models/app_models/service.js'

export const useServiceStore = defineStore('services', {
  state: () => ({
    items: services
  }),
  getters: {
    getItems: (state) => {
      const items = state.items.map((item) => {
        console.log(new model(item))
        return new model(item)
      })
      return items
    }
  }
})

export default useServiceStore
