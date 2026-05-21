class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        length = len(prices)
        max_profit = float("-inf")
        for i in range(length):
            for j in range(i+1,length):
                profit = prices[j] - prices[i]
                max_profit = max(max_profit,profit)
        if max_profit <0:
            return 0
        return max_profit

                
        