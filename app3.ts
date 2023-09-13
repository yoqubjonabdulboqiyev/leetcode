function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let m = nums1.length;
    let n = nums2.length;
    const k = nums1.concat(nums2);
    if ((m + n) % 2 === 0) {
        return (k[(m + n) / 2] + k[(m + n) / 2 - 1])
    }

    return (k[(m + n - 1) / 2])
};


console.log(findMedianSortedArrays([1, 2], [3, 4, 5]));