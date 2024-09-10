import { defineStore } from 'pinia'

// ! Import the DATA that will be used in the store
// *EXAMPLE: import { services } from '../_assets/services.js'

import { blogs } from '@assets/blogs.js'

// ! Import the MODEL(s) that will be used in the store
// *EXAMPLE: import { model } from '../_models/app_models/service.js'

import model from '@models/app_models/BlogModel.js'

export const useBlogStore = defineStore('blogs', {
  state: () => ({
    items: blogs
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

export default useBlogStore
