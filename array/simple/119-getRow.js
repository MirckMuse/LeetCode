/**
 * @description 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * @param {number} rowIndex
 * @return {number[]}
 */
// 数学计算方法
var getRow = function (rowIndex) {
  const res = []
  let cur = 1;
  for (let i = 0; i <= rowIndex; i++) {
    res.push(cur);
    // 杨辉三角第N行第i列的计算公式
    cur = cur * (rowIndex - i) / (i + 1);
  }
  return res;
};

console.log(getRow(0))
console.log(getRow(1))
console.log(getRow(2))
console.log(getRow(3))
console.log(getRow(4))

