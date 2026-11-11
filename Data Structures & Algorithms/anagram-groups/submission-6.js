class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length<=0) {
            return [[""]]
        }
        const hashmap = new Map();
        for(let word of strs) {
            const sortedKey = word.split('').toSorted().join('')
            if(hashmap.has(sortedKey)) {
                hashmap.get(sortedKey).push(word)
            } else {
                hashmap.set(sortedKey, [word])
            }
        }
        return Array.from(hashmap.values())
    }
}
