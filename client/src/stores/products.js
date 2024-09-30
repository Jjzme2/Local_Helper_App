import { defineStore } from 'pinia'
import api from './apiService'

export const useProductStore = defineStore('products', {
  state: () => ({
    allItems: [],
    visibleItems: [],
    hiddenItems: []
    // categories: []
  }),
  getters: {
    getAllItems: (state) => {
      const items = state.allItems
      return items
    },
    getVisibleItems: (state) => {
      const items = state.visibleItems
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
        console.error('Error fetching items:', error) // Log the error for debugging
        // Optional: Set a state variable to indicate an error or reset items
        this.allItems = [] // Clear items or set to an appropriate value on error
        // Optionally, you might want to show a user-friendly message
      }
    },
    // async fetchItemById(id) {
    //   try {
    // 	const res = await api.get(`/products/${id}`)
    // 	console.log('Data Retrieved.')
    // 	this.items = res.data
    //   } catch (error) {
    // 	console.error('Error fetching items:', error) // Log the error for debugging
    // 	// Optional: Set a state variable to indicate an error or reset items
    // 	this.items = [] // Clear items or set to an appropriate value on error
    // 	// Optionally, you might want to show a user-friendly message
    //   }
    // },
    async fetchVisible() {
      try {
        const res = await api.get('/products/visibility?visibility=true')
        this.visibleItems = res.data
      } catch (error) {
        console.error('Error fetching visible items:', error) // Log the error for debugging
        // Optional: Set a state variable to indicate an error or reset items
        this.visibleItems = [] // Clear items or set to an appropriate value on error
        // Optionally, you might want to show a user-friendly message
      }
    },
    async fetchHidden() {
      try {
        const res = await api.get('/products/visibility?visibility=false')
        this.hiddenItems = res.data
      } catch (error) {
        console.error('Error fetching hidden items:', error) // Log the error for debugging
        // Optional: Set a state variable to indicate an error or reset items
        this.hiddenItems = [] // Clear items or set to an appropriate value on error
        // Optionally, you might want to show a user-friendly message
      }
    }
  }
})

export default useProductStore
