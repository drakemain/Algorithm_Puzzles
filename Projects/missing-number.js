//https://leetcode.com/problems/missing-number/
//given an array on integers 0 - n, find the missing number. the numbers
//are not necessarily in order

//initially i tried to sort the array and then pass through the sorted array
//until i reached an unexpected number (ie n+2 instead of n+1). this was not scalable;
//large arrays would take a long time to sort through, so I came up with this solution.

var missingNumber = function(nums) {
  var indexSum = 0; //sum of the *index* values of the array
  var valueSum = 0; //sum of the values in the array

  for (var i = 0; i < nums.length; i++) {
    indexSum += Number(i) + 1; //adds the index value (+1) to index sum
    valueSum += nums[i]; //adds the value at index to valueSum

    //console.log(indexSum + " " + valueSum);
  }
  return indexSum - valueSum;
};

//indexSum is the values 1 through n added together (1 + 2 + 3 + 4 + .. + n)
//valueSum is the values 1 through n added togheter, minus the missing number 
  //(0 + 1 + 2 + 3 + 4 + .. + n - m, where 0 <= m <= n)

//i=1, (ΣXi) - ((ΣXi) - m) = m, where m is a missing number between 0 and n