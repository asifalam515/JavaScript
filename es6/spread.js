const mx = Math.max(324, 64, 1356, 2, 3, 6);
const min = Math.min(324, 64, 1356, 2, 3, 6);
const costs = [23, 45, 6, 2, 3, 7, 2, 25];
const mxCosts = Math.max(...costs);
console.log(mx, min, mxCosts);
// use spread operator to copy
const nums1 = [23, 21, 6, 2, 6, 21, 36, 2, 2];
const nums2 = [...nums1, 232, 542, 63, 2];
console.log(nums2);
