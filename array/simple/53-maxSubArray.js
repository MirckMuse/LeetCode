/**
 * @description 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @param {number[]} nums
 * @return {number}
 */

// 1.贪心
var maxSubArray = function (nums) {
    let currSum = nums[0], // 当前连续数字和（相加不小于下一数字的和）
        maxSum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(nums[i], nums[i] + currSum)
        maxSum = Math.max(maxSum, currSum)
    }
    return maxSum
};

// 2.动态规划

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6