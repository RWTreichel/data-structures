var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};


BinarySearchTree.prototype.insert = function(value){
  // if value is greater than rootnode
  if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }  else if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    // In the case the values are equal
    this.value = value;
  }
    // if rootnode.right is null
      // set rootnode.right to value
    // else
      // Call .insert recursively on rootnode.right and keep searching
  // else
    // add to left
};

BinarySearchTree.prototype.contains = function(target, result){
  if(result === undefined) {
    result = false;
  }

  if (this.value === target) {
    result = true;
  } else if (target > this.value) {
    if (this.right === null) {
      result = result || false;
    } else {
      result = this.right.contains(target, result);
    }
  }  else if (target < this.value) {
    if (this.left === null) {
      result = result || false;
    } else {
      result = this.left.contains(target, result);
    }
  }

  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert 0(log(n));
 contains 0(log(n));
 depthFirstLog 0(log(n)); 
 */
