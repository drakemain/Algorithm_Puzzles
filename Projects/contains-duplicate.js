https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
  var numCounter = {};

  for (var i in nums) {
    if (!numCounter[nums[i]]) {
      numCounter[nums[i]] = 1;
    } else {
      numCounter[nums[i]]++;
    }
  }

  for (var j in numCounter) {
    if (numCounter[j] > 1) {return true;}
  }
  return false;
};
