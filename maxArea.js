var maxArea = function(height) {
    let l=0;
    let r=height.length-1;
    let m=0;
    while(l<r){
        if(height[l]>height[r]){
            let p=height[r]*(r-l);
            if(p>m){
                m=p;
            }
            r--;
        }
        else{
            let p=height[l]*(r-l);
            if(p>m){
                m=p;
            }
            l++;
        }
    }
    return m;
};
console.log(maxArea([0,2]));