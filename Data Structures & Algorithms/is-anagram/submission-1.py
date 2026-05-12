class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        length_of_s = len(s)
        length_of_t = len(t)

        if length_of_s != length_of_t:
            return False
        
        s=sorted(s)
        t=sorted(t)

        if s == t:
            return True
        return False

        