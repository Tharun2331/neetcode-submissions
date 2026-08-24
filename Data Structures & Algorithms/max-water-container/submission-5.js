class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = heights.length-1
        let res = 0
        while(l < r) {
            res = Math.max(res, Math.min(heights[l],heights[r]) * (r-l))
            if(heights[l] <= heights[r]) {
                l++
            }else {
                r--
            }
           
        }
        return res

    }
}
