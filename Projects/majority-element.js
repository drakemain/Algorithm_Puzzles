//https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {
  var numCounter = {};

  for (var i in nums) {
    if (!numCounter[nums[i]]) {
      numCounter[nums[i]] = 1;
    } else {
      numCounter[nums[i]]++;
    }
  }

  var currentMaj = 0;
  var majorityHolder;

  for (var j in numCounter) {
    if (numCounter[j] > currentMaj) {
      currentMaj = numCounter[j];
      majorityHolder = j;
    }
  }
  return Number(majorityHolder);
};