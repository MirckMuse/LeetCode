/**
 * 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
 * @param {number[]} nums
 * @return {number}
 */
// 利用哈希表来查找缺失的数据
var missingNumber = function (nums) {
  const set = new Set(nums)
  for (let i = 0; i < nums.length + 1; i++) {
    if (!set.has(i)) return i
  }
  return -1
};

console.log(missingNumber([0])) // 1
console.log(missingNumber([3, 0, 1])) // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) // 8