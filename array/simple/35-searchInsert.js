/**
 * 搜索插入位置
 * @description 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 1.暴力法
var searchInsert = function (nums, target) {
    if (target > nums[nums.length - 1]) {
        return nums.length
    }
    for (let i = 0; i < nums.length; i++) {
        if (target <= nums[i]) return i
    }
    return nums.length
};

// 2.二分查找
var searchInsert = function (nums, target) {
    let left = 0,
        right = nums.length
    while (left <= right) {
        const mid = Number.parseInt((left + right) / 2)
        if (nums[mid] == target) return mid
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left;
};

console.log(searchInsert([1, 3, 5, 6], 5)) // 2
console.log(searchInsert([1, 3, 5, 6], 2)) // 1
console.log(searchInsert([1, 3, 5, 6], 7)) // 4
console.log(searchInsert([1, 3, 5, 6], 0)) // 0