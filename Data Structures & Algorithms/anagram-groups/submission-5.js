class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map();
        for(let s of strs) {
            const count = new Array(26).fill(0);
            for(let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]+=1
            }
            const key = count.join(',')
            if(!res.has(key)) {
                res.set(key,[])
            }
            res.get(key).push(s)
        }

        return Array.from(res.values())
            
    }
}
