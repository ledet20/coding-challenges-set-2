// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// Preserve the case of the original word when you are replacing it. 

function myReplace(str, before, after) {
  if(before.charAt(0) === before.charAt(0).toUpperCase()) { // if statement that will determine if the before string has been capitilized 
    after = after.charAt(0).toUpperCase() + after.slice(1); // if the statement is true we will change our after string to also 
                            // have a capitilized first letter to acommedate the change 
  }
  var newString = str.replace(before, after); // create a new variable to store our string with the method .replace() that will switch 
                                         // the position of our before and after string values that will be passed into our argument 
  return newString;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting") // "He is Sitting on the couch"
