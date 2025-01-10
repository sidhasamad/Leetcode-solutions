/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let split=x.toString().split("")
    let reversed=split.reverse().join("")

        
    
    return x.toString()===reversed
}

console.log(isPalindrome(121))