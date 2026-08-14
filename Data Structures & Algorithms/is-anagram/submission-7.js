class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        
        const frequencyCount1 = {}
        const frequencyCount2 = {}

        for(let val of s) {
            frequencyCount1[val] = (frequencyCount1[val] || 0) + 1
        }
        
        for(let val of t) {
            frequencyCount2[val] = (frequencyCount2[val] || 0) + 1
        }

        for(let key in frequencyCount1) {
            if(!(key in frequencyCount2)) {
                return false
            }
            if(frequencyCount1[key] !== frequencyCount2[key]) {
                return false
            }
        }
        return true

    }
}
