/**
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * @param {number[]} nums
 * @return {number}
 */

 // 哈希表
var majorityElement = function (nums) {
    const map = new Map()
    let max = 0
    let result = nums[0]
    for (let i = 0; i < nums.length; i++) {
        let curr = map.get(nums[i]) || 0
        map.set(nums[i], curr + 1)
        if (curr + 1 > max) {
            max = curr + 1
            result = nums[i]
        }
    }
    return result
};

console.log(majorityElement([3, 2, 3])) // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) // 2
console.log(majorityElement([6, 5, 5])) // 2