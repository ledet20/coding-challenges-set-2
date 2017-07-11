// Return an array consisting of the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays

function largestOfFour(arr) {
  var newArray = []; // create a variable that will store an empty array
  for(var i= 0; i < arr.length;i++) { // for loop that will iterate through each of the arrays
    var countHolder = 0; // create a count variable and set it equal to 0
    for(var j=0; j < arr[i].length;j++) { // for loop that will iterate through the values in each array
      if(arr[i][j] > countHolder) { // if statement that will determine if our index value is greater that our count variable in each array group
        countHolder = arr[i][j]; // if the statment is true our count variable will  continue to be  reassigned to our largest value 
                                 // untill it finishes the iteration
      }
    }
    newArray.push(countHolder); // the largest index values will then be then be pushed into our empty array 
  }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // [5,27,39,1001]
