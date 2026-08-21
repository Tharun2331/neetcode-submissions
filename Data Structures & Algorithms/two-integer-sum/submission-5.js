class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashmaps = {};
        for(let i=0; i< nums.length; i++) {
            let diff = target - nums[i]
            if(diff in hashmaps) {
                return [hashmaps[diff],i]
            }
            hashmaps[nums[i]] = i
        }
    }
}
