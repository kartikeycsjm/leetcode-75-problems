const doll = (array) => {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result ^= array[i];
    }
    return result;
}

// Extract command-line arguments (excluding the first two, which are node and the script file)
const args = process.argv.slice(2);

// Convert command-line arguments to numbers
const arr = args.map(Number);

const result = doll(arr);
console.log('Result:', result);


