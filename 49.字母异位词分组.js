/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {}
  for(let i = 0;i<strs.length;i++){
    const sortWord = strs[i].split('').sort().join('')
    if(map[sortWord] === undefined){
      map[sortWord] = [strs[i]]
    }else{
      map[sortWord].push(strs[i])
    }
  }
  return Object.keys(map).map(key=> map[key])
};
// @lc code=end

