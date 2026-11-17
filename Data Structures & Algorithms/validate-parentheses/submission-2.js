class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const hashmap = new Map();
        const stack = new Array();
        hashmap.set('(',')')
        hashmap.set('{','}')
        hashmap.set('[',']')

        for(let c of s) {
            if(hashmap.has(c)) {
                stack.push(c)
            } else {
                if(hashmap.size === 0) {
                    return false
                }
                let t = stack.pop();
                if(hashmap.get(t) !== c){
                    return false
                }
            }
        }
        return stack.length === 0;
        


    }
}
