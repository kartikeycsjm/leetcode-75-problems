function maxVowels(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxVowels = 0;
    let currentVowels = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            currentVowels++;
        }
    }
    maxVowels = currentVowels;
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            currentVowels++;
        }
        if (vowels.has(s[i - k])) {
            currentVowels--;
        }
        maxVowels = Math.max(maxVowels, currentVowels);
    }
    return maxVowels;
}


console.log(maxVowels("abciiidef", 3));   // Output: 3
console.log(maxVowels("aeiou", 2));        // Output: 2
console.log(maxVowels("leetcode", 3));     // Output: 2