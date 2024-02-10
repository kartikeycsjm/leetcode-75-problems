var isSubsequence = function(s, t) {
    let g=''
    let x=0;
    for(let i=0;i<t.length;i++){
        if(s.charAt(x)===t.charAt(i)){
            g+=s.charAt(x);
            x++;
        }
    }
    return g===s?true:false;
};

console.log(isSubsequence('aec', 'abcde'));
