class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        prod = 1
        zero_count = 0
        for num in nums:
            if num ==0:
                zero_count+=1
            else:
                prod*=num
        
        if zero_count > 1:
            return [0]*n
        res=[0]*n
        for i,num in enumerate(nums):
            if zero_count == 1:
                res[i]= prod if num == 0 else 0
            else:
                res[i]= prod//num
        return res





        