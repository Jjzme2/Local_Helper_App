import { defineStore } from 'pinia'
import api from './apiService'

export const useProductStore = defineStore('products', {
  state: () => ({
    allItems: [],
    allVisibleItems: [],
    limitedItems: [],
    hiddenItems: []
    // categories: []
  }),
  getters: {
    getAllItems: (state) => {
      const items = state.allItems
      return items
    },
    getLimitedItems: (state) => {
      const items = state.limitedItems
      return items
    },
    getAllVisibleItems: (state) => {
      const items = state.allVisibleItems
      return items
    },
    getHiddenItems: (state) => {
      const items = state.hiddenItems
      return items
    }
    // getItemById: (state) => (id) => {
    //   const item = state.items.find((item) => item.id === id)
    //   return item
    // }
  },

  actions: {
    async fetchItems() {
      try {
        const res = await api.get('/products')
        this.allItems = res.data
      } catch (error) {
        console.error('Error fetching items:', error)
        this.allItems = []
      }
    },

    async fetchLimited(limit) {
      try {
        const res = await api.get('/products/visibility?visibility=true&&limit=' + limit)
        this.limitedItems = res.data
      } catch (error) {
        console.log('Error fetching limited items:', error)
        this.limitedItems = []
      }
    },

    async fetchAllVisible() {
      try {
        const res = await api.get('/products/visibility?visibility=true')
        this.allVisibleItems = res.data
        console.log('Res:', res.data)
      } catch (error) {
        console.error('Error fetching visible items:', error)
        this.allVisibleItems = []
      }
    },
    async fetchHidden() {
      try {
        const res = await api.get('/products/visibility?visibility=false')
        this.hiddenItems = res.data
      } catch (error) {
        console.error('Error fetching hidden items:', error)
        this.hiddenItems = []
      }
    }
  }
})

export default useProductStore
