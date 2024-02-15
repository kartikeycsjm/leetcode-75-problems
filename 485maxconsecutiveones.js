var findMaxConsecutiveOnes = function(nums) {
    let c=0;
    let m=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            c++;
        }
        else{
            c=0;
        }
        m=Math.max(m,c)
    }
    return m
};


console.log(findMaxConsecutiveOnes([1,1,1,0,1,1,1,1]));