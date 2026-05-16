class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        length_s = len(s)
        length_t = len(t)
        if length_s != length_t:
            return False
        
        s=sorted(s)
        t=sorted(t)
        
        if s == t:
            return True
        return False