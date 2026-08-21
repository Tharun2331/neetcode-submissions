class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }

        const smap = {}
        const tmap = {}

        for (let schar of s) {
            smap[schar] = (smap[schar] || 0) + 1
        }
        for (let tchar of t) {
            tmap[tchar] = (tmap[tchar] || 0) + 1
        }
        for(let key in smap) {
            if(!key in smap) {
                return false
            }
            else if((smap[key] !== tmap[key])){
                return false
            }
        }
        return true
    }
}
