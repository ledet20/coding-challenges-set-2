// Return true if the string in the first element of the array contains all of the letters of the string
// in the second element of the array.

function mutation(arr) {
  var word1 = arr[0].toLowerCase();   createa variable that will convert our two index array value to lower case values 
  var word2 = arr[1].toLowerCase();
  
  for(var i = 0; i < word2.length;i++) {  // for loop that will iterate through the second word in our array, this will allow us 
                                          // to determine if the characters in our 2nd word are in our first array word  
    var value = word1.indexOf(word2[i]);  // create a variable that will check if the index characters in our word2 value are in our first word 
    if(value === -1) { // if our value variable contains no  identical letters and returns a -1 value then the statement will be fasle 
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]); // true
