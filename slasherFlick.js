// Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
    var arr = arr.slice(howMany) // create a variable that will that will store our array with the .slice() method 
                                // .slice() will have the parameter howMany that will remove the value passed in the functins argument
  return arr;
}

slasher([1, 2, 3], 1); // [2,3]
