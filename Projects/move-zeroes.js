//https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
  var numsLen = nums.length;

  for (var i = 0; i < numsLen; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);

      numsLen--;
      i--;
    }
  }
};
