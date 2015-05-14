var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var sCount = 0;
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[sCount] = value;
    sCount += 1;
  };

  someInstance.pop = function(){
    if (sCount) {
      sCount -= 1;
    }
    
    var result = storage[sCount];
    delete storage[sCount];
    return result;
  };

  someInstance.size = function(){
    return sCount;
  };

  return someInstance;
};
