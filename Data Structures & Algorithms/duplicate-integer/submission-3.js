class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const len = nums.length;
        let frequencyMap = {}
        for (let val of nums) {
            frequencyMap[val] = (frequencyMap[val] || 0 ) + 1
            if(frequencyMap[val] > 1) return true
        }

     

    return false
}
}