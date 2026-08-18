class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashmap = {};
        for(let i=0; i<nums.length; i++) {
            if(nums[i] in hashmap) {
                hashmap[nums[i]] = hashmap[nums[i]] + 1 
            }
            else {
                hashmap[nums[i]] = 1
            }
        
        }
        
        const sorted = Object.entries(hashmap).sort((a, b) => b[1] - a[1]);
        const result = sorted.slice(0, k).map(([key, val]) => Number(key));
        return result;

    }
}
