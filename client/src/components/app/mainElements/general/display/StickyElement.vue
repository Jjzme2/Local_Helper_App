<template>
  <div v-if="isVisible" class="overlay">
    <div
      class="sticky-popup"
      :style="computedStyle"
      role="dialog"
      aria-labelledby="popup-title"
      aria-describedby="popup-description"
    >
      <header class="sticky-header">
        <h2 id="popup-title" class="header-title"><slot name="header"></slot></h2>
        <button class="close-button" @click="closeElement" aria-label="Close Sticky Popup">
          ×
        </button>
      </header>
      <div class="sticky-content" id="popup-description">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StickyPopup',
  props: {
    zIndex: {
      type: Number,
      default: 1000
    },
    backgroundColor: {
      type: String,
      default: 'white'
    },
    threshold: {
      type: Number,
      default: 0 // The distance from the top of the viewport to trigger the sticky state
    }
  },
  data() {
    return {
      isVisible: true // Control visibility of the element
    }
  },
  computed: {
    computedStyle() {
      return {
        position: 'fixed',
        top: this.threshold + 'px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: this.zIndex,
        backgroundColor: this.backgroundColor,
        transition: 'all 0.3s ease' // Transition for smooth appearance
      }
    }
  },
  methods: {
    closeElement() {
      this.isVisible = false // Hide the sticky element
      this.$emit('close') // Emit close event
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center; /* Center the sticky popup */
  align-items: flex-start; /* Align the sticky popup to the top */
  z-index: 999; /* Overlay z-index above all content */
}

.sticky-popup {
  width: 90%; /* Responsive width */
  max-width: 600px; /* Max width for larger screens */
  padding: 20px;
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
}

.sticky-header {
  display: flex; /* Use flexbox for layout */
  justify-content: space-between; /* Space between title and close button */
  align-items: center; /* Center items vertically */
}

.close-button {
  background: none; /* No background */
  border: none; /* No border */
  font-size: 24px; /* Size of the close button */
  cursor: pointer; /* Pointer cursor on hover */
  transition: color 0.3s ease; /* Smooth transition for hover effect */
}

.close-button:hover {
  color: red; /* Change color on hover */
}

.sticky-content {
  margin-top: 10px; /* Space between header and content */
}
</style>
