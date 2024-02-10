// var maxOperations = function(nums, k) {
//     let fmap = new Map();
//     let op = 0;

//     for (let i = 0; i < nums.length; i++) {
//         const comp = k - nums[i];
//         if (fmap.has(comp) && fmap.get(comp) > 0) {
//             op++;
//             fmap.set(comp, fmap.get(comp) - 1);
//         } else {
//             fmap.set(nums[i], (fmap.get(nums[i]) || 0) + 1);
//         }
//     }

//     return op;
// };

var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let op = 0;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === k) {
            op++;
            left++;
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }
    return op;
};

