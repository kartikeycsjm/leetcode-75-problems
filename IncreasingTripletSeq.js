function increasingTriplet(nums) {
    let min1 = Number.MAX_SAFE_INTEGER;
    let min2 = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= min1) {
            min1 = nums[i];
        } else if (nums[i] <= min2) {
            min2 = nums[i];
        } else {
            return true;
        }
    }
    return false;
}
const nums1 = [1, 2, 3, 4, 5];
console.log(increasingTriplet(nums1));