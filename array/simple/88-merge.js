/**
 * 合并两个有序数组
 * 
 * @description 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1,
        p2 = n - 1,
        p = m + n - 1
    while (p >= 0) {
        nums1[p--] = (Number.isInteger(nums1[p1]) ? nums1[p1] : -Infinity) < (Number.isInteger(nums2[p2]) ? nums2[p2] : -Infinity) ? nums2[p2--] : nums1[p1--]
    }
    return nums1
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) // [1,2,2,3,5,6]
console.log(merge([0], 0, [1], 1)) // [1]
console.log(merge([2, 0], 1, [1], 1)) // [1,2]
console.log(merge([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6)) // [-1,0,0,1,1,1,2,3,3]
