/**
 * 给定一个二进制数组， 计算其中最大连续1的个数。
 * * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/max-consecutive-ones/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0
  let curr = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      curr++
      max = Math.max(max, curr)
    } else {
      curr = 0
    }
  }
  return max
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])) // 3
