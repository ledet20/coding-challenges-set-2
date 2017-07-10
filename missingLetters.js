// Find the missing letter in the passed letter range and return it.

function fearNotLetter(str) {
  var letters = 'abcdefghijk;mnopqrstuvwxyz'; // create a variable that stores all values in the alphabet
  var letters = letters.split('') // create the letters variable to an array with each character a seperate index in the array 
  
 var str = str.split(''); // create a varaible to turn our str parameter into an array with individual characters in each index 
  
  if(str[0] !== 'a') { // if statement that will determine if our str does not start with an a 
    return undefined; // if the statement is true it will return undefined 
  } else {
  for(var i = 0; i < str.length; i++) { // for loop that will iterate through the length of the string 
    if(str[i] !== letters[i]) { // if statement that will determine if a string index does not match our letters index as it is being looped 
      return letters[i]; // if they do not match the missing index value will be returned 
    }
  }
}
     
}

fearNotLetter("abce"); // d
