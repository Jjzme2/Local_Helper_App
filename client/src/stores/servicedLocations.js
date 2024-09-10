import { defineStore } from 'pinia'

import { servicedLocations } from '@assets/servicedLocations.js'
import model from '@models/app_models/ServicedLocation.js'

export const useLocationStore = defineStore('servicedLocations', {
  state: () => ({
    items: servicedLocations
  }),
  getters: {
    getItems: (state) => {
      const items = state.items.map((item) => {
        return new model(item)
      })
      return items
    }
  }
})

export default useLocationStore
