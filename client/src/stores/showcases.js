import { defineStore } from 'pinia'

import { showCaseItems } from '../_assets/showcases.js'

import model from '../_models/app_models/showcase.js'
// import modelAlt from '../_models/app_models/_ALT_MODEL_NAME.js'

export const useShowcaseStore = defineStore('showcases', {
  state: () => ({
    items: showCaseItems
  }),
  getters: {
    getItems: (state) => {
      const items = state.items.map((item) => {
        return new model(item)
      })
      return items
    },
    getItemById: (state) => (id) => {
      const item = state.items.find((item) => item.id === id)
      return new model(item)
    },
    getItemsByServiceId: (state) => (serviceId) => {
      const items = state.items.filter((item) => item.serviceId === serviceId)
      return items.map((item) => new model(item))
    }
  }
})

export default useShowcaseStore
