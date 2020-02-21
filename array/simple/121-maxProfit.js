/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 * 注意你不能在买入股票前卖出股票。
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0
  let buy = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) buy = prices[i]
    else if (prices[i] - buy > max) max = prices[i] - buy
  }
  return max
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
console.log(maxProfit([7, 2, 5, 6, 1, 4])) // 4
console.log(maxProfit([7, 6, 4, 3, 1])) // 0
