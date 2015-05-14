var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.length = 0;

  // Implement the methods below
  someInstance.enqueue = function(value){
    storage[storage.length] = value;
    storage.length += 1;
  };

  someInstance.dequeue = function(){
    if(storage.length) {
      return Array.prototype.shift.call(storage);
    }  
  };

  someInstance.size = function(){    
    return storage.length;
  };

  return someInstance;
};