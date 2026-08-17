class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashmap = {};
        const result = [];
        for(let i=0; i<nums.length; i++) {
            if(nums[i] in hashmap) {
                hashmap[nums[i]] = hashmap[nums[i]] + 1 
            }
            else {
                hashmap[nums[i]] = 1
            }
        
        }
     // buckets[freq] = list of numbers with that frequency
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const num in hashmap) {
            const freq = hashmap[num];
            buckets[freq].push(Number(num));
        }

        for (let freq = buckets.length - 1; freq >= 0 && result.length < k; freq--) {
            for (const num of buckets[freq]) {
                result.push(num);
                if (result.length === k) break;
            }
        }

        return result;

    }
}
