/**
 * 反转数字
 * @description 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * @param {number} x
 * @return {number}
 */

// js中安全整数范围为[ -2 ^ 53 , 2 ^ 53 - 1]
var reverse = function (x) {
    const MaxValue = Math.pow(2, 31) - 1
    const MinValue = Math.pow(-2, 31)
    let result = 0
    while (x !== 0) {
        const pop = x % 10
        x = Number.parseInt(x / 10)
        // 溢出控制
        if (result > MaxValue / 10 || (result === MaxValue / 10 && pop > 7)) return 0
        if (result < MinValue / 10 || (result === MinValue / 10 && pop < -8)) return 0
        result = result * 10 + pop
    }
    return result
};

console.log(reverse(123)) // 321
console.log(reverse(-123)) // -321
console.log(reverse(120)) // 21
console.log(reverse(1534236469)) // 0
