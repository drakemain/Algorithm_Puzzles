//http://leetcode.com/problems/add-digits/
//add the digits of an int repeatedly until the result is one digit

//num a non-negative integer
var addDigits = function(num) {
  var sum = num;
  var iterator = 0;

  while (true){
    console.log("Iteration: " + iterator);

    //checks to see if sum has 1 digit
    if (sum.toString().length === 1){
      return sum;
    }

    //calls digitSplitter, which returns an array of the digits of sum
    var digitArray = digitSplitter(sum);

    //ensures sum is 0 for each pass
    sum = 0;

    //adds the values of the digits together and stores value in sum
    for (var i in digitArray) {
      sum += digitArray[i];
    }

    iterator++;
    
    console.log("Sum: " + sum + '\n');
  }
}

var digitSplitter = function(num) {
  num = num.toString()
  var digitArray = []

  for (var i in num) {
    digitArray[i] = Number(num[i]);
  }

  return digitArray;
}