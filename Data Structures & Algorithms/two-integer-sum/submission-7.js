class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const hashmap = new Map();
       for(let i=0; i<nums.length;i++) {
            const need = target - nums[i]
            if(hashmap.has(need)) {
                return [hashmap.get(need),i]
            }
            hashmap.set(nums[i],i)
       }
    }
}