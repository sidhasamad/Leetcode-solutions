/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count=n
    return function() {
        let result;
        for(let i=0;i<1;i++){
            result=count 
            count++
        }
    return result;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */