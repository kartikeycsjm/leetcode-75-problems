const twoSum=(arr,k)=>{
    let l=0;
    let fmap=new Map()
    for(let i=0;i<arr.length;i++){
        fmap.set(arr[i],i)
    }
    arr.sort((a,b)=>a-b)
    let r=arr.length-1;
    while(l<r){
        let sum=arr[l]+arr[r];
        if(sum===k){
            return [fmap.get(arr[r]),fmap.get(arr[l])]
        }
        else if(sum>k){
            r--;
        }
        else{
            l++;
        }
    }
}
console.log(twoSum([2,3,1],3));


const twoSum=(arr,k)=>{
    let fmap=new Map();
    for(let i=0;i<arr.length;i++){
        let comp=k-arr[i];
        if(fmap.has(comp)){
            return [fmap.get(comp),i]
        }
        else{
            fmap.set(arr[i],i);
        }
    }
}
console.log(twoSum([2,3,7,1],10));
