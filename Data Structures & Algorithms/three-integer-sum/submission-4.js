class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const ans = new Set();
        const n=nums.length;
        for(let i=0;i<n-1; i++) {
            let hashset = new Set()
            for(let j =i+1; j<n;j++) {
                let difference = -(nums[i] + nums[j])
                if(hashset.has(difference)) {
                    let temp = [nums[i],nums[j],difference].sort((a,b) => a-b);
                    ans.add(JSON.stringify(temp)) 
                }
                hashset.add(nums[j])
            }
   
        }
        return Array.from(ans).map(str => JSON.parse(str)) 

    }
}
