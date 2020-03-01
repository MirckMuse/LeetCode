/**
 * 给定一个整数数组和一个整数 k, 你需要在数组里找到不同的 k-diff 数对。这里将 k-diff 数对定义为一个整数对 (i, j), 其中 i 和 j 都是数组中的数字，且两数之差的绝对值是 k.
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/k-diff-pairs-in-an-array
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 哈希表
var findPairs = function (nums, k) {
    if (k < 0) return 0
    // 利用set的特性消除重复数字
    const saw = new Set(),
        diff = new Set()
    for (let i = 0; i < nums.length; i++) {
        //  如果第i个数字上下浮动k的两个数字存在与saw哈希表内，则添加于较大值diff哈希表
        if (saw.has(nums[i] - k)) diff.add(nums[i])
        if (saw.has(nums[i] + k)) diff.add(nums[i] + k)
        saw.add(nums[i])
    }
    return diff.size
};

console.log(findPairs([3, 1, 4, 1, 5], 2)) // 2
console.log(findPairs([1, 2, 3, 4, 5], 1)) // 4
console.log(findPairs([1, 3, 1, 5, 4], 0)) // 1
console.log(findPairs([1, 1, 1, 2, 1], 1)) // 1