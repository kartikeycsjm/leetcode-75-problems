// var pivotIndex = function(nums) {
//     let smap=new Map();
//     let emap=new Map();
//     let s=0;
//     let e=0;
//     for(let i=0;i<nums.length;i++){
//         s+=nums[i];
//         e+=nums[nums.length-i-1]
//         smap.set(i,s)
//         emap.set(nums.length-1-i,e)
//     }
//     for(let i=0;i<nums.length;i++){
//         if(smap.get(i)===emap.get(i)){
//             return i
//         }
//     }
//     return -1;
// };

// console.log(pivotIndex([1,7,3,6,5,6]));


var pivotIndex = function (nums) {
    const sum = (arr) => {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    for (let i = 0; i < nums.length; i++) {
        let la = nums.slice(0, i)
        let ra = nums.slice(i + 1, nums.length)
        if (sum(la) === sum(ra)) {
            return i;
        }
    }
    return -1;
};
console.log(pivotIndex([10, 7, 3, 6, 5, 6]));