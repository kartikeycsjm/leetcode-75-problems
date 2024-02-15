var rotate = function(nums, k) {
    let z=[];
    if(nums.length<k){
        let c=k%nums.length;
        for(let i=nums.length-c;i<nums.length;i++){
            z.push(nums[i])
        }
        for(let i=0;i<nums.length-c;i++){
            z.push(nums[i])
        }
        for(let i=0;i<nums.length;i++){
            nums[i]=z[i]
        }
    }
    if(nums.length>k){
        for(let i=nums.length-k;i<nums.length;i++){
            z.push(nums[i])
        }
        for(let i=0;i<nums.length-k;i++){
            z.push(nums[i])
        }
        // for(let i=0;i<nums.length;i++){
        //     nums[i]=z[i]
        // }
        nums=z;
    }
}
// var rotate = function(nums, k) {
//     let n=nums.length;
//     const reverse=(arr,s,e)=>{
//         while (s<e) {
//             [arr[s],arr[e]]=[arr[e],arr[s]]
//             s++;
//             e--;
//         }
//     }
//     reverse(nums,0,n-1);
//     reverse(nums,0,k-1)
//     reverse(nums,k,n-1)
// }
let arr=[1,2,3,4,5,6,7]
rotate(arr,3);
console.log(arr);