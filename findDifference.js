/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let m1=new Set();
    for(let i=0;i<nums1.length;i++){
        m1.add(nums1[i])
    }
    let m2=new Set();
    for(let i=0;i<nums2.length;i++){
        m2.add(nums2[i])
    }
    let a1=new Set()
    for(let i=0;i<nums1.length;i++){
        if(!m2.has(nums1[i])){
            a1.add(nums1[i])
        }
    }
    let a2=new Set();
    for(let i=0;i<nums2.length;i++){
        if(!m1.has(nums2[i])){
            a2.add(nums2[i])
        }
    }
    return [[...a1],[...a2]]
};
console.log(findDifference([1,2,3],[2,4,6]));