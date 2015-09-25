//https://leetcode.com/problems/single-number/

var testArr = [8, 1, 9, 5, 3, 11, 2, 2, 4, 6, 10, 3, 1, 5, 6, 11, 4, 7, 9, 10, 8];

var singleNumber = function(nums) {
  var numCounter = {};

  for (var i in nums) {
    if (!numCounter[nums[i]]) {
      numCounter[nums[i]] = 1;
    } else {
      numCounter[nums[i]]++;
    }
    console.log('.');
  }

  for (var j in numCounter) {
    if (numCounter[j] === 1) {return j;}
    console.log(',');
  }
};

console.log(singleNumber(testArr));