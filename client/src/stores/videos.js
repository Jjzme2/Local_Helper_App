import { defineStore } from 'pinia'
import api from './apiService'
import model from '@models/app_models/Video.js'

export const useVideoStore = defineStore('videos', {
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
        console.log('No videos found')
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
        .get('/videos')
        .then((res) => res.data)
        .catch((error) => {
          throw error
        })
    }
  }
})

export default useVideoStore
