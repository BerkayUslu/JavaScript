var twoSum = function (nums, target) {
  cloneNums = [...nums];
  cloneNums.sort(function(a, b) {
    return a - b;
  });
  let left = 0;
  let right = cloneNums.length-1;
  console.log(cloneNums);
    
  for(let i = 0;i<nums.length;i++){
    if(cloneNums[left]+cloneNums[right] === target){
      const index1 = nums.indexOf(cloneNums[left]);
      let index2 = nums.indexOf(cloneNums[right]);
      if(index1 === index2){
        nums.splice(index1,1);
        index2 = nums.indexOf(cloneNums[right])+1;
      }
      return [index1,index2];
    }else if(cloneNums[left]+cloneNums[right] > target){
      right = right-1;
    }else if(cloneNums[left]+cloneNums[right] < target){
      left = left+1;
    }
  }
};

let result = twoSum([7, 11, 5,2 ,15], 9);

console.log(result);
