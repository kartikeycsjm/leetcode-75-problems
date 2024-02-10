// var productExceptSelf = function(nums) {
//     let oa = [];
//     const split = (a1, a2) => {
//         let b1 = 1;
//         let b2 = 1;
//         for (let i = 0; i < a1.length; i++) {
//             b1 *= a1[i];
//         }
//         for (let i = 0; i < a2.length; i++) {
//             b2 *= a2[i];
//         }
//         return b1 * b2;
//     };
//     for (let i = 0; i < nums.length; i++) {
//         let a = nums.slice(0, i);
//         let b = nums.slice(i + 1);
//         oa.push(split(a, b));
//     }
//     return oa;
// };
// console.log(productExceptSelf([-1,1,0,-3,3]));



var productExceptSelf = function(nums) {
    const n = nums.length;
    // Initialize arrays to store products to the left and right of each element.
    const leftProducts = new Array(n).fill(1);
    const rightProducts = new Array(n).fill(1);
    let leftProduct = 1;
    let rightProduct = 1;
    // Calculate products to the left of each element.
    for (let i = 1; i < n; i++) {
        leftProduct *= nums[i - 1];
        leftProducts[i] = leftProduct;
    }
    // Calculate products to the right of each element.
    for (let i = n - 2; i >= 0; i--) {
        rightProduct *= nums[i + 1];
        rightProducts[i] = rightProduct;
    }
    // Calculate the final result by multiplying left and right products.
    const result = [];
    for (let i = 0; i < n; i++) {
        result[i] = leftProducts[i] * rightProducts[i];
    }
    return result;
};
console.log(productExceptSelf([1, 2, 3, 4]));




var productExceptSelf = function(nums) {
    let l1=[];
    for(let i=1;i<nums.length;i++{
        l1[i]=
    }
};
console.log(productExceptSelf([1, 2, 3, 4]));

