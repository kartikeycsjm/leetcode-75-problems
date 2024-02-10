var largestAltitude = function(gain) {
    let alt=-Infinity;
    let arr=[];
    arr[0]=0;
    for(let i=0;i<gain.length;i++){
        arr[i+1]=gain[i]+arr[i];
    }
    for(let i=0;i<gain.length+1;i++){
        alt=Math.max(alt,arr[i])
    }
    return alt;
};

// console.log(largestAltitude([-4,-3,-2,-1,4,3,2]));


var largestAltitude = function(gain) {
    let alt=-Infinity;
    let s=0;
    for(let i=0;i<gain.length;i++){
        alt=Math.max(alt,s);
        s+=gain[i];
    }
    return alt;
};

console.log(largestAltitude([-5,1,5,0,-7]));