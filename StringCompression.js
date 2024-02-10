var compress = function(chars) {
    let oa=[];
    let c=1;
    for(let i=0;i<chars.length;i++){
        if(chars[i]===chars[i+1]){
            c++;
        }
        else{
            if(c===1){
                oa.push(chars[i])
                c=1;
            }
            else{
                oa.push(chars[i])
                let y=c.toString();
                let x=y.split('');
                for(let j=0;j<x.length;j++){
                    oa.push(x[j])
                }
                c=1;
            }
        }
    }
    return oa;
};
let x=["a","a","b","b","c","c","c"]
console.log(compress(x));