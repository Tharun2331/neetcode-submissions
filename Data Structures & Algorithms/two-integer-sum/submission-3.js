class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;
        if (n === 0) {
            return
        }

        const hashmap = {}
        for(let i = 0; i<n; i++) {
            hashmap[nums[i]] = i;
        }

        for(let i = 0; i<n; i++) {
            let diff = target - nums[i]
            if(hashmap[diff] !== undefined && hashmap[diff] !== i) {
                return [i,hashmap[diff]];
            }
        }

return [];

    }
}
