class Solution:
    def maxArea(self, heights: List[int]) -> int:
        length = len(heights)
        max_water = 0
        left = 0 
        right = length - 1
        while left < right:
            min_value = min(heights[left],heights[right])
            distance = right - left
            water = min_value*distance
            max_water = max(max_water,water)
            if heights[left] < heights[right]:
                left+=1
            else:
                right-=1
        return max_water
                
        