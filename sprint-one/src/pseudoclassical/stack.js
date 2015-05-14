var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.  
  this.storage = {};
  this.sCount = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.sCount] = value;
  this.sCount += 1;
};

Stack.prototype.pop = function() {
  if (this.sCount) {
    this.sCount -= 1;
  }
  var result = this.storage[this.sCount];
    delete this.storage[this.sCount];
    return result;
};

Stack.prototype.size = function() {
  return this.sCount;
};

// var stackMethods = {
//   push: function(value) {
//     this.storage[this.sCount] = value;
//     this.sCount += 1;
//   },
//   pop: function() {
//     if(this.sCount) {
//       this.sCount -= 1;
//     }

//     var result = this.storage[this.sCount];
//     delete this.storage[this.sCount];
//     return result;
//   },
//   size: function() {
//     return this.sCount;
//   }
// };


