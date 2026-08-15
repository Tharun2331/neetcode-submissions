class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length === 0 ) {
            return 
        }

        const result = [];
        for (let i = 0; i<nums.length-1; i++) {
            for (let j=i+1; j<nums.length; j++) {
                if(nums[i]+nums[j] === target) {
                    result.push(i,j);
                }
            }
        }
        return result;
    }
}
