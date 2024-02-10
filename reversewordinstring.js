var reverseWords = function(s) {
    let a = [];
    let ind = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) === ' ') {
            a[ind] = s.substring(i + 1, s.length);
            ind++;
        } else if (i === 0) {
            a[ind] = s.substring(0, s.length);
        }
    }
    let org=[];
    for(let i=0;i<a.length;i++){  
        for(let j=0;j<a[i].length;j++){
            if(a[i].charAt(j)!=' '){
                org.push(a[i].substring(j,a[i].indexOf(' ')));
            }

            // else{
            //     org.push(a[i].substring(a[i].indexOf(' ')+1,a[i].length))
            // }
        }
    }
    return a;
};

console.log(reverseWords(' the boy   is'));
