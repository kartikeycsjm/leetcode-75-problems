// var moveZeroes = function(nums) {
//     let ne = [];
//     let j = 0;
//     let z = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums.length == 1) {
//             return nums;
//         }
//         if (nums[i] === 0) {
//             z++;
//         } else {
//             ne[j] = nums[i];
//             j++;
//         }
//     }
//     for (let i = 0; i < z; i++) {
//         ne.push(0);
//     }
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = ne[i];
//     }
//     console.log(nums);
// };

function moveZeroes(nums) {
    let nonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
}
let array = [0,1,0,3,12];
moveZeroes(array);
console.log(array);





