class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(nums.length === 0) {
            return 0
        }
        
        const n = nums.length;
        const sorted_list = nums.sort((a, b) => a - b);
        
        let currentResult = 1;
        let maxCurrentResult = 1;

        for(let i =0; i< n; i++) {
                if (sorted_list[i+1]-sorted_list[i] ===  1) {
                    currentResult++
                }else if(sorted_list[i+1]-sorted_list[i] >0) {
                    currentResult = 1;
                }
                if (currentResult > maxCurrentResult) maxCurrentResult = currentResult
            }
                

            return maxCurrentResult            
            }
    }

