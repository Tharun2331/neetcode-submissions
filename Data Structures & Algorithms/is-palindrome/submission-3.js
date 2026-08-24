class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanText = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        let left = 0
        let right = cleanText.length-1
        while(left < right) {
            if(cleanText[left] !== cleanText[right]) {
                return false
            }
            left++
            right--
        }
        return true
    }
}
