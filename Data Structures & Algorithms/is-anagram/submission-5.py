class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        length_s = len(s)
        length_t = len(t)
        if length_s != length_t:
            return False
        hashmap = {}
        hashmap1 = {}

        for i in range(length_s):
            hashmap[s[i]] = 1 + hashmap.get(s[i],0)
            hashmap1[t[i]] = 1 + hashmap1.get(t[i],0)
        
        if hashmap == hashmap1:
            return True
        return False