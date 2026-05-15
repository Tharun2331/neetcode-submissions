class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0

        sorted_list = sorted(nums)
        sets = list(dict.fromkeys(sorted_list))

        n=len(sets)

        count=1
        maxcount=1
        for i in range(n-1):
            count = 1
            for j in range(i+1,n):
                if sets[j] == sets[i]+count:
                    count+=1
                    maxcount = max(count,maxcount)
                elif sets[j] > sets[i] + count:
                    break
            
                
        
        return maxcount
                



        