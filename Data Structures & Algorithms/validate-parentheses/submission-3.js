class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length % 2 !== 0) return false
        const pairs = {')':'(', ']':'[','}':'{'}
        const stack = new Array();
        for(let c of s) {
            if(c in pairs) {
                if(stack.pop() !== pairs[c]) return false
            } else{
                stack.push(c)
            }
        }

        return stack.length === 0;
        


    }
}
