//https://leetcode.com/problems/single-number/

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
