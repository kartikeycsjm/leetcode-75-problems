var uniqueOccurrences = function (arr) {
    let x = new Map();
    for (let i = 0; i < arr.length; i++) {
        x.set(arr[i], (x.get(arr[i]) || 0) + 1)
    }
    let y=new Set();
    for(let i=0;i<arr.length;i++){
        y.add(x.get(arr[i]))
    }
    return y.size===x.size
};

console.log(uniqueOccurrences([1,2]));