class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    twoSum(nums,f,res) {
        let l = f+1
        let r = nums.length-1
        while(l < r) {
            const summ = nums[f] + nums[l] + nums[r];
            if(summ > 0) {
                r--
            }
            else if(summ < 0) {
                l++
            } else{
                res.push([nums[f],nums[l],nums[r]])
                l++
                r--
                while(l<r && nums[l] === nums[l-1]) {
                    l++
                }
                while(l<r && nums[r] === nums[r+1]) {
                    r--
                }
            }
        }
    }
    
    threeSum(nums) {
        const res = [];
        nums.sort((a,b) => a-b)
        for(let f=0; f<nums.length; f++) {
            if(nums[f] > 0) {
                break
            }
            if(f===0 || nums[f] !== nums[f-1]) {
                this.twoSum(nums,f,res)
            }
        }
    return res
    }
}
