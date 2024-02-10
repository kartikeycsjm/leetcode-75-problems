let anagrams=(strs)=>{
    let g=[];
    for(let i=0;i<strs.length;i++){
        let sortedw=strs[i].split('').sort().join('');
        g.push(sortedw);
    }
    let x=[]
    for(let i=0;i
    return g;
}
let words=['cat','atc','ten','net'];
console.log(anagrams(words));