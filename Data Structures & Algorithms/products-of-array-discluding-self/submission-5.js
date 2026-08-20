class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        let res = new Array(n).fill(1);

        let pref = 1
        for(let i =0; i<nums.length; i++) {
            res[i] = pref
            pref *= nums[i]
        }
        let post = 1
        for(let i=n-1; i>-1; i--) {
            res[i] *= post
            post *= nums[i]
        }

        return res



    }
}
