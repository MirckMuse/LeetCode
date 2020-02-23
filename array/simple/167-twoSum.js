/**
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const map = new Map()
    for (let i = 0; i < numbers.length; i++) {
        if (map.get(target - numbers[i])) {
            return [map.get(target - numbers[i]), i + 1]
        }
        map.set(numbers[i], i + 1)
    }
};

console.log(twoSum([2, 7, 11, 15], 9))