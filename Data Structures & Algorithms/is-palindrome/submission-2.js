class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanText = s.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
       
        let newStr = '';
        for(let c of cleanText) {
            if(c !== ' ') newStr+=c
        }
        let reverseStr = '';
        for(let i = cleanText.length-1; i>-1; i--) {
            if(cleanText[i] !== ' ') {
                reverseStr+=cleanText[i]
            }
        }
        console.log(newStr)
        console.log(reverseStr)

        return reverseStr === newStr;



        
    }
}
