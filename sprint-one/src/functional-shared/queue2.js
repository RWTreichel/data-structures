var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var some = {};
  some.storage = {};
  some.storage.length = 0; // Array's shift method depends on a length property.
  _.extend(some, queueMethods);

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
      var result = Array.prototype.shift.call(this.storage);
      return result;      
    }
  },
  size: function() {
    return this.storage.length;
  }
};

/** In case we need our own object shift function.
var objectShift = function(obj) {
  var result = obj[0];

  for (var i = 1; i < obj.length; i++) {
    obj[i-1] = obj[i];
  }

  delete obj[obj.length - 1];
  return result;
};
**/