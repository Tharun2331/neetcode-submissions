class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const hashmapS = new Map();
        const hashmapT = new Map();

        for(let word of s) {
            hashmapS.set(word, (hashmapS.get(word) || 0) + 1)
        }
        for(let word of t) {
            hashmapT.set(word, (hashmapT.get(word) || 0) + 1)
        }

        
        for(let [key, value] of hashmapS.entries()) {
            if(hashmapT.get(key) !== value) {
                return false
            }
        }

        return true

    }
}
