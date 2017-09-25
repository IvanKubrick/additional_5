module.exports = function check(str, bracketsConfig) {
  var dictionary = {};
  for (var i = 0; i < bracketsConfig.length; i++) {
    var arr = bracketsConfig[i];
    dictionary[ arr[0] ] = arr[1];
  }
  var bufferArr = [];
  for (var i = 0; i < str.length; i++) {
    var char = str[i],
        lastElem = bufferArr[bufferArr.length-1];
    if (char in dictionary && char != dictionary[char]) {
      bufferArr.push(char);
    } else if (char in dictionary && char == dictionary[char]) {
      (char == lastElem) ? bufferArr.pop() : bufferArr.push(char);
    } else if ( char == dictionary[lastElem] ) {
      bufferArr.pop();
    } else return false;
  }
  return (!bufferArr.length) ? true : false;
}