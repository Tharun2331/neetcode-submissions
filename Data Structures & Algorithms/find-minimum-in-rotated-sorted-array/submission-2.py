class Solution:
    def findMin(self, nums: List[int]) -> int:
        n=len(nums)
        l=0
        r=n-1
        res= nums[0]

        while l <= r:
            if nums[l] < nums[r]:
                res = min(res,nums[l])
                break
            mid = l + ((r-l)//2)
            res = min(res,nums[mid])
            if nums[mid] >= nums[l]:
                l = mid + 1
            else:
                r = mid-1

        return res 