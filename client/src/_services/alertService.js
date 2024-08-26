import emitter from './utilities/eventBus';

function sendAlert(message) {
  emitter.emit('alert', message);
}