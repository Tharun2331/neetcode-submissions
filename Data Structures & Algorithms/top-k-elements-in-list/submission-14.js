class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};

        for(let n of nums) {
            count[n] = (count[n] || 0) + 1
        }

        const heap = new MinPriorityQueue((x)=>x[1]);

        for(const [num,cnt] of Object.entries(count)) {
            heap.enqueue([num,cnt])
            if(heap.size() > k) heap.dequeue();
        }
        const result = [];
        for(let i=0;i<k;i++) {
            const [num,cnt] = heap.dequeue();
            result.push(num)
        }

        return result




    }
}
