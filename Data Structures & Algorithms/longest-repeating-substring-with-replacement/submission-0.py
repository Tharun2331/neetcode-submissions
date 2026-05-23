class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        length = len(s)
        res = 0
        for i in range(length):
            count,maxfreq = {},0
            for j in range(i,length):
                count[s[j]] = 1 + count.get(s[j],0)
                maxfreq = max(maxfreq,count[s[j]])
                if (j-i+1) - maxfreq <= k:
                    res = max(res,j-i+1)
        return res
        





                

                
        