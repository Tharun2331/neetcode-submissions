class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashmaps = {}
        for(let num of nums) {
            hashmaps[num] = (hashmaps[num] || 0) + 1
        }

        for(const [key,value] of Object.entries(hashmaps)) {
            if(value > 1){
                return true
            }
           
        }
        return false
    }
}
