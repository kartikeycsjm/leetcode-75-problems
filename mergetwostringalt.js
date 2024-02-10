const merge=(word1,word2)=>{
    let c='';
    if(word1.length>=word2.length){
        
        for(let i=0;i<word1.length;i++){
            c+=word1.charAt(i)+word2.charAt(i);
        }
        return c;
    }
    else{
        for(let i=0;i<word2.length;i++){
            c+=word1.charAt(i)+word2.charAt(i);
        }
        return c;
    }
}


console.log(merge('abc','pqry'));