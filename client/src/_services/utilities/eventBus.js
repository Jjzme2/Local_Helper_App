// src/eventBus.js
import mitt from 'mitt'
const emitter = mitt()

const eventBus = {
  /**
   * Emit an event with the given data.
   * @param {string} event - The event name.
   * @param {*} data - The data to emit with the event.
   */
  emit: (event, data) => {
    emitter.emit(event, data)
    // Example: eventBus.emit('my-event', 'Hello World')
  },

  /**
   * Remove an event handler for the given event.
   * @param {string} event - The event name.
   * @param {Function} handler - The handler function to remove.
   */
  off: (event, handler) => {
    emitter.off(event, handler)
    // Example: eventBus.off('my-event', (data) => { console.log(data) })
  },

  /**
   * Clear all event handlers.
   */
  clearAll: () => {
    emitter.all.clear()
  },

  /**
   * Listen to all events.
   * @param {Function} handler - The handler function to call on any event.
   */
  onAny: (handler) => {
    emitter.on('*', handler)
  },

  /**
   * Listen to the given event.
   * @param {string} event - The event name.
   * @param {Function} handler - The handler function to call on the event.
   * @returns {Function} - A function to remove the event listener.
   */
  on: (event, handler) => {
    emitter.on(event, handler)
    // Example: eventBus.on('my-event', (data) => { console.log(data) })
  }
}

export default eventBus
