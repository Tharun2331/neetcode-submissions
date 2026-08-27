class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const mapp = new Map();
        let l=0
        let res = 0
        for(let r=0; r<s.length; r++) {
            if(mapp.has(s[r])) {
                l = Math.max(mapp.get(s[r])+1,l)
            }
            mapp.set(s[r],r)
            res = Math.max(res,r-l+1)
        }
        return res;
    }
}
