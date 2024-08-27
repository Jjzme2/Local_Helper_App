import { defineStore } from 'pinia'

// ! Import the DATA that will be used in the store
// *EXAMPLE: import { services } from '../_assets/services.js'

import { _STOREDDATA } from '../_assets/_DATAFILE.js'

// ! Import the MODEL(s) that will be used in the store
// *EXAMPLE: import { model } from '../_models/app_models/service.js'

import model from '../_models/app_models/_MODEL_NAME.js'
// import modelAlt from '../_models/app_models/_ALT_MODEL_NAME.js'

export const use_STOREDDATAStore = defineStore('_STOREDDATA', {
  state: () => ({
    items: _STOREDDATA
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
    }
  }
})

export default use_STOREDDATAStore
