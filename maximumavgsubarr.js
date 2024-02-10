// var findMaxAverage = function (nums, k) {
//     let m = -Infinity;
    
//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < k + i; j++) {
//             sum += nums[j];
//         }
//         if(sum/k>m){
//             m=sum/k;
//         }
//     }
//     return m;
// };



var findMaxAverage = function(nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let maxSum = sum;
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum / k;
};



console.log(findMaxAverage([5], 1));