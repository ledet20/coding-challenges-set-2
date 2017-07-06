// Return the factorial of the provided integer.

function factorialize(num) {
  var start = 1    // create a varable that will multiply each number by itself
  for(var i = 1; i <= num ; i++) { // for loop to iterate through the number passed in our argument starting from 
                                   // one and ending at our given num value we pass 
    start *= i;                    // will multipy each value leading to the numebr by one and by each number
  }
  return start;     
}

factorialize(5); // 125
