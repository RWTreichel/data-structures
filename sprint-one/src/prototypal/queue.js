var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var some = Object.create(queueMethods);
  some.storage = {};
  some.storage.length = 0; // Array's shift method depends on a length property.

  return some;
};

var queueMethods = {
  enqueue: function(value) {
    // Add value at the end of the queue, returned by this.size()
    this.storage[this.size()] = value;
    this.storage.length += 1;
  },
  dequeue: function() {
    // Prevent decrementing below zero
    if (this.size()) {
      // The call to shift automatically adjusts this.storage.length
      return Array.prototype.shift.call(this.storage);  
    }
  },
  size: function() {
    return this.storage.length;
  }
};
