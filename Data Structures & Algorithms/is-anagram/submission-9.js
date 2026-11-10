class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sortedS = Array.from(s).sort().join();
        const sortedT = Array.from(t).sort().join();

        return sortedS === sortedT;

    }
}
