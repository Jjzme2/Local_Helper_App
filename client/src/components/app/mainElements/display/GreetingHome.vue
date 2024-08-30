<template>
  <div class="message">
    <h3>{{ timeOfDayMessage }}!</h3>
    <!-- <p>{{ weatherInfo }}</p> -->
  </div>
</template>

<script>
// import { computed, onBeforeMount } from 'vue'
import { computed } from 'vue'
// import { useWeatherStore } from '@/stores/weather'

export default {
  name: 'GreetingHome',
  setup() {
    // const store = useWeatherStore()

    const timeOfDayMessage = computed(() => {
      const time = new Date().getHours()
      if (time < 12) {
        return 'Good Morning'
      } else if (time < 18) {
        return 'Good Afternoon'
      } else {
        return 'Good Evening'
      }
    })

    // onBeforeMount(() => {
    //   store.fetchWeather('60950')
    // })

    // const weatherInfo = computed(() => {
    //   const weather = store.getWeatherData
    //   if (weather) {
    //     return `The weather in ${weather.location.name}, ${weather.location.region} is ${weather.current.temp_f}° F and feels like ${weather.current.feelslike_f}° F.`
    //   }
    //   return 'Loading weather data...'
    // })

    return {
      timeOfDayMessage
      //   weatherInfo
    }
  }
}
</script>
