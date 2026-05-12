class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        length_of_s = len(s)
        length_of_t = len(t)
        hashmap = {}
        hashmap1 = {}
        if length_of_s != length_of_t:
            return False
        
        for num in s:
            if num in hashmap:
                hashmap[num] +=1
            else:
                hashmap[num] = 1
        
        for num in t:
            if num in hashmap1:
                hashmap1[num] +=1
            else:
                hashmap1[num] = 1

        if hashmap == hashmap1:
            return True
        return False
        
        