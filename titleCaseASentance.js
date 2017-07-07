// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
   str = str.toLowerCase(); // convert all elements in the string to lower case 
   str = str.split(" "); // seperate the string by each space 
   
   for(var i = 0; i < str.length; i++) { // for loop to iterate through the length of the string 
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); // each index of the string will have their first index capitalized with 
          // charAt(0).toUpperCase while the remaninder of the index will be add to the capitialized letter 
   }
   return str; // will return our new string index's
}

titleCase("I'm a little tea pot"); // "I'm A Little Tea Pot"
