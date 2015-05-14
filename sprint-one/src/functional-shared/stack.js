var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.storage = {};
  someInstance.sCount = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.sCount] = value;
    this.sCount += 1;
  },
  pop: function() {
    if(this.sCount) {
      this.sCount -= 1;
    }

    var result = this.storage[this.sCount];
    delete this.storage[this.sCount];
    return result;
  },
  size: function() {
    return this.sCount;
  }
};


