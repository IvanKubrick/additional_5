module.exports = function check(str, bracketsConfig) {
  var dictionary = {};
  for (var i = 0; i < bracketsConfig.length; i++) {
    var arr = bracketsConfig[i];
    dictionary[ arr[0] ] = arr[1];
  }

  var bufferArr = [];
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if(char in dictionary) {
      bufferArr.push(char);
    } else if ( char == dictionary[ bufferArr[bufferArr.length-1] ] ) {
      bufferArr.pop();
    } else return false;
  }
  return (!bufferArr.length) ? true : false;
}