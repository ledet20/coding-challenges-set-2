// Reverse the provided string.

function reverseString(str) {
  var string = ''   // create a empty variable that will hold our string 
  for(var i = str.length-1; i >= 0; i--) { // for loop that will iterate through the string backwards starting 
                                            // from the end of our string value to the beginning
    string += str[i]               // will add each index of our string into our empty string value 
  }
  return string;    
}

reverseString("hello"); // olleh
