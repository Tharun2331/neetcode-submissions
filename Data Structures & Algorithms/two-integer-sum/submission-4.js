class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;

        const hashmap = {}

        for(let i = 0; i<n; i++) {
            let diff = target - nums[i]
            if(diff in hashmap) {
                return [hashmap[diff],i]
            } else {
                hashmap[nums[i]] = i
            }
        }

        return ;

    }
}
