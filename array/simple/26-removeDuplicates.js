/**
 * 移除排序数组中的重复项
 * @description 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
    const set = new Set()
    let curr = 0 // 记录返回新数组的长度（也是不同项的下标）
    for (let i = 0; i < nums.length; i++) {
        // 已经出现过的数字跳过
        if (set.has(nums[i])) continue
        nums[curr] = nums[i]
        curr++
        set.add(nums[i])
    }
    return curr
};

console.log(removeDuplicates([1, 1, 2])) // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) // 5