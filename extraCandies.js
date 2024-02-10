const x=(candies,extraCandies)=>{
    let bool=[];
    let d=Math.max(...candies)
    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies>=d)
        {
            bool.push(true);
        }
        else{
            bool.push(false)
        }
    }
    return bool;
}
console.log(x([2,3,5,1,3],3));