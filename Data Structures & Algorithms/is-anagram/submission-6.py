class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        length_s = len(s)
        length_t = len(t)
        if length_s != length_t:
            return False
        count = [0]*26

        for i in range(length_s):
            count[ord(s[i])-ord('a')] +=1
            count[ord(t[i])-ord('a')]-=1
        
        for val in count:
            if val !=0:
                return False
        return True