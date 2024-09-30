import axios from 'axios'

const api = axios.create({
  baseURL: '/api'
  // Additional configurations
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export default api
