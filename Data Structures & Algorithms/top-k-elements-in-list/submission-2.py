class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        length = len(nums)
        hashmap = {}
        result = []
        for num in nums:
            if num in hashmap:
                hashmap[num] +=1
            else:
                hashmap[num] = 1
        sorted_value = sorted(hashmap.items(), key=lambda x:x[1], reverse=True)
        for i in range(k):
            result.append(sorted_value[i][0])

        return result
        

        