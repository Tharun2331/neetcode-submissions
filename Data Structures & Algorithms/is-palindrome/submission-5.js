class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(char) {
        return (
            (char >="A" && char <="Z") ||
            (char >="a" && char <="z") ||
            (char >="0" && char <= "9")
         )
    }

    isPalindrome(s) {
        let  l = 0;
        let r = s.length-1;
        while(l < r) {
            while(l<r && !this.isAlphaNumeric(s[l])) {
                l++
            }
            while(l<r && !this.isAlphaNumeric(s[r])) {
                r--
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++
            r--
        }
        return true
    }
}
