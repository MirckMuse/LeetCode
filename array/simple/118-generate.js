/**
 * @description 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * @param {number} numRows
 * @return {number[][]}
 */

// 动态规划
var generate = function (numRows) {
  if (numRows) {
    const result = [[1]]
    for (let rowNum = 1; rowNum < numRows; rowNum++) {
      const row = [1]
      const pre = result[rowNum - 1]
      for (let i = 1; i < rowNum; i++) {
        row.push(pre[i - 1] + pre[i])
      }
      row.push(1)
      result.push(row)
    }
    return result
  }
  return []
};

console.log(generate(1))
console.log(generate(5))
console.log(generate(10))
