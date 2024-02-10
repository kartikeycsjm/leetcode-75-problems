var reverseVowels = function (s) {
    let v = 'aeiouAEIOU';
    let ov = '';
    let r = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < v.length; j++) {
            if (s.charAt(i) === v.charAt(j)) {
                ov += v.charAt(j);
            }
        }
        r[i] = s[i];
    }
    let reversedVowel = ov.split('').reverse().join('');
    let reversedVowelIndex = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < v.length; j++) {
            if (s[i] === v[j]) {
                r[i] = reversedVowel.charAt(reversedVowelIndex);
                reversedVowelIndex++;
            }
        }
    }
    return r.join('');
};
console.log(reverseVowels('leetcode'));
