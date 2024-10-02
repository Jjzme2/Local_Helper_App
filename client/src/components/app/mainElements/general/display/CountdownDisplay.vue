<template>
  <div class="countdown-display centered">
    <div v-if="displayText" class="display-text">
      <p>{{ displayText }}</p>
    </div>

    <div v-if="timeLeft" class="time-left">
      <div class="time-unit">
        <span class="time-value">{{ timeLeft.days }}</span>
        <span class="time-label">d</span>
      </div>
      <div class="time-unit">
        <span class="time-value">{{ timeLeft.hours }}</span>
        <span class="time-label">h</span>
      </div>
      <div class="time-unit">
        <span class="time-value">{{ timeLeft.minutes }}</span>
        <span class="time-label">m</span>
      </div>
      <div class="time-unit">
        <span class="time-value">{{ timeLeft.seconds }}</span>
        <span class="time-label">s</span>
      </div>

      <br />
    </div>

    <div v-else class="time-up">
      <span>Time's up!</span>
    </div>

    <button @click="scrollToNewsletter" class="primary-button top-margin-3 centered">
      {{ timeLeft ? 'Be among the first to know' : 'Sign up now!' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'CountdownDisplay',
  props: {
    targetDate: {
      type: Date,
      required: true
    },
    displayText: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      timeLeft: null,
      intervalId: null
    }
  },
  mounted() {
    this.calculateTimeLeft()
    this.intervalId = setInterval(this.calculateTimeLeft, 1000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  },
  methods: {
    calculateTimeLeft() {
      const now = new Date()
      const difference = this.targetDate - now

      if (difference <= 0) {
        this.timeLeft = null
        clearInterval(this.intervalId)
      } else {
        this.timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        }
      }
    },
    scrollToNewsletter() {
      const newsletterSection = document.getElementById('newsletterSignup')
      if (newsletterSection) {
        newsletterSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
