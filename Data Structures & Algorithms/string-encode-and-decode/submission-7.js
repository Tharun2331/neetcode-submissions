class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       let encoded_result =  "";

       for(const s of strs) {
         encoded_result += s.length + "#" + s
       }

       return encoded_result;
    }


    /**
     * @param {string} str
     * @returns {string[]}
     */
 

    decode(str) {
        let decoded_result = [];
        let i = 0;
        while(i < str.length) {
           let j = i;
            while(str[j] !== "#") {
                j++
            }
            let length = parseInt(str.substring(i,j));
            i = j+1;
            j = i+length;

            decoded_result.push(str.substring(i,j));
            i=j;
        }
        return decoded_result;
    }

}
