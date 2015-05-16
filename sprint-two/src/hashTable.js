var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var found = false;

  if (bucket === undefined) {
    this._storage.set(i, [[k, v]]);
  } else {
    for(var j = 0; j < bucket.length; j++) {
      var tuple = bucket[j];
      if(tuple[0] === k) {
        tuple[1] = v;
        found = true;
        break;
      }
    }

    if (!found) {
      bucket.push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j] && bucket[j][0] === k) {
      return bucket[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  for (var j = 0; j < bucket.length; j++) { 
    if (bucket[j] && bucket[j][0] === k) {
      bucket[j] = null;
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 insert - O(1);
 retrieve - O(1);
 remove - O(1);
 */
