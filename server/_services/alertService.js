// const emitter = require('./utilities/eventBus')
import emitter from './utilities/eventBus'

function sendAlert(message) {
  emitter.emit('alert', message)
}

function listen(event, handler) {
  emitter.on(event, handler)
}

function removeListener(event, handler) {
  emitter.off(event, handler)
}

export default {
  sendAlert,
  listen,
  removeListener
}
