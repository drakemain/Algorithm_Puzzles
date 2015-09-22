//http://leetcode.com/problems/add-digits/

var addDigits = function(num) {
  var sum = num;
  var iterator = 0;

  while (true){
    console.log("Iteration: " + iterator);

    if (sum.toString().length === 1){
      return sum;
    }

    var digitArray = digitSplitter(sum);

    sum = 0;

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