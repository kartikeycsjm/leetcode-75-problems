const merge=(str1,str2)=>{
    let c=0;
    if(str1.length>=str2.length){
        for(let i=0;i<str2.length;i++){
            if(str2.charAt(i)===str1.charAt(i)){
                c++;
            }
        }
        return str1.substring(0,c)
    }
    else{
        for(let i=0;i<str1.length;i++){
            if(str2.charAt(i)===str1.charAt(i)){
                c++;
            }
        }
        return str1.substring(0,c)
    }
}


console.log(merge('abcf','abcfg'));