// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.

function getIndexToIns(arr, num) {
  arr.push(num);   // use the .push() method to add our num parameter into our array 
  var array = arr.sort(function(a,b) { // create a variable that will sort through our array and return te array in ascending order 
    return a-b;
  });
  return array.indexOf(num); // apply the .indexOf method to our array to determine the position of our 
                             // num parameter that was added to our array 
}

getIndexToIns([40, 60], 50); // [40,50,60] // 1
