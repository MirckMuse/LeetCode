/**
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

 // 哈希表
var containsNearbyDuplicate = function (nums, k) {
  // 存储key-value  数字-索引
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && (i - map.get(nums[i])) <= k) {
      return true
    } else {
      map.set(nums[i], i)
    }
  }
  return false
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)) // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)) // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)) // false