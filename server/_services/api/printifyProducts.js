import axios from 'axios'

import dotenv from 'dotenv'
dotenv.config()

const PRINTIFY_TOKEN = process.env.PRINTIFY_TOKEN
const shopId = process.env.ILYTAT_ID
const USER_AGENT = 'ilytat_designs'
const PRINTIFY_API_URL = 'https://api.printify.com/v1'

const axiosInstance = axios.create({
  baseURL: PRINTIFY_API_URL,
  headers: {
    Authorization: `Bearer ${PRINTIFY_TOKEN}`,
    'User-Agent': USER_AGENT
  }
})

const printifyProductService = {
  // Get all products from Printify store
  async getAll() {
    const productLink = '/shops/' + shopId + '/products.json'
    try {
      const response = await axiosInstance.get(productLink)
      return response.data
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  },

  async getByVisibility(visibility, limit = 0) {
    const productLink = `/shops/${shopId}/products.json`
    try {
      const response = await axiosInstance.get(productLink)
      // Filter products by visibility
      const filteredProducts = response.data.data.filter(
        (product) => product.visible.toString() === visibility
      )

      // Apply the limit if specified, or return all products if no limit is set
      const limitedProducts = limit > 0 ? filteredProducts.slice(0, limit) : filteredProducts

      return limitedProducts
    } catch (error) {
      console.error(
        `Error fetching products for shop ${shopId} with visibility ${visibility}:`,
        error
      )
      throw error
    }
  },
  // Get a single product by ID
  async getById(id) {
    const productLink = '/shops/' + shopId + '/products/' + id + '.json'
    try {
      const response = await axiosInstance.get(productLink)
      return response.data
    } catch (error) {
      console.error('Error fetching product:', error)
      throw error
    }
  }
}

export default printifyProductService
