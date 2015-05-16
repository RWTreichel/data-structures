var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined) {
    this._storage.set(i, [[k, v]]);
  } else {
    this._storage.get(i).push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  for (var j = 0; j < temp.length; j++) {
    if (temp[j] && temp[j][0] === k) {
      return temp[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  for (var j = 0; j < temp.length; j++) { 
    if (temp[j] && temp[j][0] === k) {
      temp[j] = null;
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
