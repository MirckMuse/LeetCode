/**
 * 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }
  let result = new Array(3).fill(-Infinity)
  for (let i = 0; i < nums.length; i++) {
    if (result.includes(nums[i])) continue
    if (nums[i] > result[2]) result = [result[1], result[2], nums[i]]
    else if (nums[i] > result[1]) result = [result[1], nums[i], result[2]]
    else if (nums[i] > result[0]) result[0] = nums[i]
  }
  return result[0] === -Infinity ? result[2] : result[0]
};
console.log(thirdMax([3, 2, 1])) // 1
console.log(thirdMax([1, 2])) // 2
console.log(thirdMax([2, 2, 3, 1])) // 1
console.log(thirdMax([1, 2, 2, 5, 3, 5])) // 2