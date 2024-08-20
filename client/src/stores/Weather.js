import { defineStore } from 'pinia'

const apiKey = import.meta.env.VITE_WEATHER_API_KEY

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weatherData: null,
    loading: false,
    error: null
  }),
  actions: {
    async fetchWeather(location) {
      this.loading = true
      this.error = null
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch weather data')
        }
        const data = await response.json()
        this.weatherData = data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    }
  },
  getters: {
    getWeatherData: (state) => state.weatherData,
    isLoading: (state) => state.loading,
    getError: (state) => state.error
  }
})

export default useWeatherStore
