<template>
  <div class="message">
    <p>{{ timeOfDayMessage }}!</p>
    <p>The current time is {{ currentTime }}</p>
    <p>{{ weatherInfo }}</p>
  </div>
</template>

<script>
import { computed, onBeforeMount, ref, onMounted, onUnmounted } from 'vue'
import { useWeatherStore } from '@/stores/weather'

export default {
  name: 'GreetingHome',
  setup() {
    const store = useWeatherStore()

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

    const currentTime = ref(
      new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    )
    const updateTime = () => {
      currentTime.value = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      })
    }
    let timer
    onMounted(() => {
      timer = setInterval(updateTime, 1000)
    })

    onUnmounted(() => {
      clearInterval(timer)
    })

    onBeforeMount(() => {
      store.fetchWeather('60950')
    })

    const weatherInfo = computed(() => {
      const weather = store.getWeatherData
      if (weather) {
        return `The weather in ${weather.location.name}, ${weather.location.region} is ${weather.current.temp_f}° F and feels like ${weather.current.feelslike_f}° F.`
      }
      return 'Loading weather data...'
    })

    return {
      timeOfDayMessage,
      currentTime,
      weatherInfo
    }
  }
}
</script>
