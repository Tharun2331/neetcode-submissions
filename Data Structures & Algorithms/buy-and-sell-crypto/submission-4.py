class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        length = len(prices)
        left=0
        right=1
        maxprofit=0
        while right < length:
            
            if prices[right] > prices[left]:
                profit = prices[right] - prices[left]
                maxprofit = max(profit,maxprofit)
            else:
                left = right
            right+=1
        return maxprofit

            

        