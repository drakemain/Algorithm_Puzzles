//https://leetcode.com/problems/missing-number/

var nums = [5, 10, 6, 12, 3, 1, 7, 0, 2, 8, 4, 9];

var missingNumber = function(nums) {
  var indexSum = 0;
  var valueSum = 0;

  for (var i = 0; i < nums.length; i++) {
    indexSum += Number(i) + 1;
    valueSum += nums[i];

    console.log(indexSum + " " + valueSum);
  }
  return indexSum - valueSum;
};

console.log(missingNumber(nums));