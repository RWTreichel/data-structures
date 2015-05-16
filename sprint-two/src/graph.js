var Graph = function(){
  this.nodes = {};

};

Graph.prototype.addNode = function(node){
  this.nodes[node] = {
    "connections": {}
  };
};

Graph.prototype.contains = function(node){
  return !!this.nodes[node];
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var from = this.nodes[fromNode];
  var to = this.nodes[toNode];
  return !!from.connections[toNode] && !!to.connections[fromNode];
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var from = this.nodes[fromNode];
  var to = this.nodes[toNode];
  from.connections[toNode] = toNode;
  to.connections[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var from = this.nodes[fromNode];
  var to = this.nodes[toNode];
  delete from.connections[toNode] && to.connections[fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode = O(1);
 contains = O(1);
 removeEdge = O(1);
 hasEdge = O(1);
 addEdge = O(1);
 removeEdge = O(1);
 forEachNode = O(n);
 */



