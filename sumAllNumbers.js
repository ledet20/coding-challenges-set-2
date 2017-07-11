// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
  var max = Math.max(arr[0],arr[1]); // create a variable that will determine whitch index value is the largest
  var min = Math.min(arr[0],arr[1]); // create a variable that will determine whitch index value is the smallest 
    // Math.max and Math.min are built in javascript methods that allow you to compare a set of data and detemine the largest/smallest value 
  var result = 0;  // count variable that will start at 0
  for(var i=min; i<= max; i++) { // for loop that will itereate through the values between the smallest and largest value in our array 
    result += i; // redifine our count variable to add 0 to each index value in our iteration 
  }


  return result; // will return the value of all index values added together 
}

sumAll([1, 4]); // 10
