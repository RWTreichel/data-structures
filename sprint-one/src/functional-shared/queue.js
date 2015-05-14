var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var some = {};
  some.storage = {};
  some.count = 0;
  _.extend(some, queueMethods);

  return some;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count += 1;
  },
  dequeue: function() {
    if (this.count) {
      this.count -= 1;
    }

    var result = this.storage[0];
    Array.prototype.unshift(this.storage);
    delete this.storage[this.count];
    return result;
  },
  size: function() {
    return this.count;
  }
};
