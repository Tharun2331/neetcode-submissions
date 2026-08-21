class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        
        for(let word of strs) {
            let sortedKey = word.split('').sort().join('')
            if(!map.has(sortedKey)) {
                map.set(sortedKey,[])
            }
            map.get(sortedKey).push(word)
        }
        return Array.from(map.values())
    }
}
