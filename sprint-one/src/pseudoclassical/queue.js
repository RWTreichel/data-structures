var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storage.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value;
  this.storage.length += 1;
};

Queue.prototype.dequeue = function() {
  if (this.size()) {
    return Array.prototype.shift.call(this.storage);
  }
};

Queue.prototype.size = function() {
  return this.storage.length;
};
