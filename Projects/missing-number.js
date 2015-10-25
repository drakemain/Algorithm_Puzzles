//https://leetcode.com/problems/missing-number/

var missingNumber = function(nums) {
  var indexSum = 0;
  var valueSum = 0;

  for (var i = 0; i < nums.length; i++) {
    indexSum += Number(i) + 1;
    valueSum += nums[i];

    //console.log(indexSum + " " + valueSum);
  }
  return indexSum - valueSum;
};
