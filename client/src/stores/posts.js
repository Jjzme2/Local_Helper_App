import { defineStore } from 'pinia'
import api from './apiService'
import model from '@models/app_models/post.js'

export const usePostStore = defineStore('posts', {
  state: () => ({
    items: []
  }),
  getters: {
    getItems: (state) => {
      const items = state.items
      const itemMap = []
      for (let i = 0; i < items.length; i++) {
        console.log('Creating new model from item: ', items[i])
        itemMap.push(new model(items[i]))
      }

      if (itemMap.length === 0) {
        console.log('No posts found')
      }
      return itemMap
    },
    getItemById: (state) => (id) => {
      const item = state.items.find((item) => item.id === id)
      return item ? new model(item) : null
    }
  },

  actions: {
    async fetchAll() {
      this.items = await api
        .get('/posts')
        .then((res) => res.data)
        .catch((error) => {
          throw error
        })
    }
  }
})

export default usePostStore
