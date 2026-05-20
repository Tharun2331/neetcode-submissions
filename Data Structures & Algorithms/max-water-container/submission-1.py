class Solution:
    def maxArea(self, heights: List[int]) -> int:
        length = len(heights)
        max_water = 0
        for i in range(length):
            for j in range(i+1,length):
               min_value = min(heights[i],heights[j])
               distance = j - i
               water = min_value*distance
               max_water = max(max_water,water)
        return max_water
                
        