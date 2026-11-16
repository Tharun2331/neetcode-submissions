class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n).fill(1);
        let pref= 1
        let postf=1
        for(let i=0; i<n; i++) {
            res[i] =  pref;
            pref*= nums[i]
        }
        for(let i=n-1; i>=0; i--) {
            res[i]*=postf
            postf*=nums[i]
        }
        return res
    }
}
