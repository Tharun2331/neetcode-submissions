class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        triplet_set = set()
        length = len(nums)

        for i in range(length):
            hashset = set()
            for j in range(i+1,length):
                more_needed = - (nums[i] + nums[j])
                if more_needed in hashset:
                    temp = [nums[i],nums[j],more_needed]
                    temp.sort()
                    triplet_set.add(tuple(temp))

                hashset.add(nums[j])
        
        ans = [list(trip) for trip in triplet_set]
        return ans

        