class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        length = len(nums)
        hashmap={}

        for i in range(length):
            num = nums[i]
            more_needed = target - num
            if more_needed in hashmap:
                return [hashmap[more_needed],i]
            else:
                hashmap[num] = i
        