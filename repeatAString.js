// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  var repeatStr = ''; // create an empty variable that will hold our string 
  while(num > 0) { // while loop that will continue to iterate as long as the statement is true 
    repeatStr += str; // will add the str value into our empty string 
    num--;     // with each loop our num will be decreased until the condition is no longer true 
    // this will prevent an infinite loop 
  }
  return repeatStr;
}

repeatStringNumTimes("abc", 3); // 'abcabcabc'
