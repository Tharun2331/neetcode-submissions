class Solution:
    def minWindow(self, s: str, t: str) -> str:
        count_t = {}
        count_s = {}

        for c in t:
               count_t[c] = 1 + count_t.get(c,0)
        
        need= len(count_t)
        have=0
        resLen = float('inf')
        res = [-1,-1]
        l=0

        for r in range(len(s)):
            char = s[r]
            count_s[char] = 1 + count_s.get(char,0)
            if char in count_t and count_s[char] == count_t[char]:
                have+=1
            
            while have == need:
                if (r-l)+1 < resLen:
                    res = [l,r]
                    resLen= (r-l)+1
                
                count_s[s[l]]-=1
                if s[l] in count_t and count_s[s[l]] < count_t[s[l]]:
                    have-=1
                l+=1
        l,r = res
        return s[l:r+1] if resLen != float('inf') else "" 

                





        

        