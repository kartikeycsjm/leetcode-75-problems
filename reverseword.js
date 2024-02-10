const reverseWords=(s)=>{
    let reversed=' '
    let output=''
    for(let i=s.length;i>=0;i--){
        if(s.charAt(i)===' '){
            reversed=reversed+output+' ';
            output='';
        }
        else{
            output=s.charAt(i)+output;
        }
    }
    reversed+=output;
    let org=''
    for(let i=0;i<reversed.length;i++){
        if(!(reversed.charAt(i)===' '&&reversed.charAt(i+1)===' ')){
            org+=reversed.charAt(i);
        }
    }
    return org.trim();
}
console.log(reverseWords("the sky is blue"));