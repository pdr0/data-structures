"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPriorityQueue = void 0;

var _queues = require("./queues");

const createPriorityQueue = () => {
  const highPriorityQueue = (0, _queues.createQueue)();
  const lowPriorityQueue = (0, _queues.createQueue)();
  return {
    enqueue(item) {
      let isHighPriority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      const queue = isHighPriority ? highPriorityQueue : lowPriorityQueue;
      queue.enqueue(item);
    },

    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }

      return lowPriorityQueue.dequeue();
    },

    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }

      return lowPriorityQueue.peek();
    },

    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },

    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    }

  };
};

exports.createPriorityQueue = createPriorityQueue;
const q = createPriorityQueue();
q.enqueue('A fix here');
q.enqueue('A bug there');
q.enqueue('A new feature');
q.dequeue();
q.enqueue('Emergency task!', true);
console.log(q.dequeue());
console.log(q.peek());