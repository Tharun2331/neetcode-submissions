class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        for(let n of nums) {
            count.set(n, (count.get(n) || 0 ) + 1)
        }

        const sorted = [...count.entries()].sort((a,b) => b[1]-a[1]);
        const result = sorted.slice(0,k).map(pair => pair[0])
        return result;

    }
}
