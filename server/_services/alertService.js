const emitter = require('./utilities/eventBus');

function sendAlert(message) {
  emitter.emit('alert', message);
}

function listen(event, handler) {
  emitter.on(event, handler);
}

function removeListener(event, handler) {
  emitter.off(event, handler);
}

module.exports = {
  sendAlert,
  listen,
  removeListener
};