var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  // var parent = this;
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var result = false;

  // base case
  if (this.value === target) {
    result = true;
  }

  // recursion step
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      result = result || this.children[i].contains(target);
    }
  }

  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 add 0(1);
 contains 0(n);
 */
