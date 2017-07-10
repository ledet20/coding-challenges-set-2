// Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool) {
  if(typeof(bool) === 'boolean') { // if statement that will determine if the type of our bool parameter
                       //that we pass in is indeed a boolean statement to return the value of true 
    return true; 
  } 
  return false; // if it is not a boolean value it will return false 
}

booWho(null); //false 
