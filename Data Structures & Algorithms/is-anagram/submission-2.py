class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        length_of_s = len(s)
        length_of_t = len(t)
        hashmap = {}
        hashmap1 = {}
        if length_of_s != length_of_t:
            return False
        
        for i in range(len(s)):
            hashmap[s[i]] = 1 + hashmap.get(s[i],0)
            hashmap1[t[i]] = 1 + hashmap1.get(t[i],0)
        
        
        for c in hashmap:
            if hashmap[c] != hashmap1.get(c,0):
                return False
        return True
        
        