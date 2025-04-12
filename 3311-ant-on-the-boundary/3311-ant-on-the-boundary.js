/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let count=0;
    let right=0;
    for(let i=0;i<nums.length;i++){
        right=right+nums[i]

       
    if(right==0){
        count++
       }
    }
    return count
};