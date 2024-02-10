const odd = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let c = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                c++;
            }
        }
        if (c % 2 !== 0) {
            return arr[i];
        }
    }
}

const arr = [2, 2, 5, 5,9];
console.log(odd(arr));
