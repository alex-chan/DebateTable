/**
 * Topic model events
 */

'use strict';

import {EventEmitter} from 'events';
var Topic = require('../../sqldb').Topic;
var TopicEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TopicEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Topic.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    TopicEvents.emit(event + ':' + doc._id, doc);
    TopicEvents.emit(event, doc);
    done(null);
  }
}

export default TopicEvents;
