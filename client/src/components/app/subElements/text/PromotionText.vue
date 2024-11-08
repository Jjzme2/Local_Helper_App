<template>
  <div class="text-med">
    <p class="promotion-message">{{ message }}</p>
    <p class="promotion-details">
      <span v-if="percentOff">{{ percentOff }}% off {{ category }}</span>
      <span v-if="startDate && endDate">
        from {{ formattedStartDate }} to {{ formattedEndDate }}</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'PromotionText',
  props: {
    percentOff: {
      type: Number,
      required: false,
      default: null
    },
    startDate: {
      type: String,
      required: false,
      default: null
    },
    endDate: {
      type: String,
      required: false,
      default: null
    },
    message: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedStartDate() {
      return this.formatDate(this.startDate)
    },
    formattedEndDate() {
      return this.formatDate(this.endDate)
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return null
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      // Ensure the date is parsed as UTC to avoid timezone issues
      const utcDate = new Date(date + 'T00:00:00Z')
      return utcDate.toLocaleDateString('en-us', options)
    }
  }
}
</script>

<style scoped>
.promotion-message {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
  animation: bounce 1.5s infinite;
}

.promotion-details {
  font-size: 0.75rem;
  color: #fff;
}

.promotion-details span {
  display: block;
  margin-top: 5px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
