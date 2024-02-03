const solution=(nums,target)=>
{
 for(let i=0;i<nums.length;i++){
  let currentVal=nums[i];
  let x=target-currentVal;
  if (nums.includes(x)){
    let index= nums.indexOf(x);
    if(index==i){
      index= nums.indexOf(x,i+1)
    }  
    if (index==-1){
      let newCurrentVal=nums[i+1]
      x=target-newCurrentVal;
      if(nums.includes(x)){
        index=nums.indexOf(x);
        i++
      }
    } 
    return [i,index]
  } 
 }
}
console.log(solution([2,7,11,15],9));
console.log(solution([3,2,4],6));
console.log(solution([3,3],6));
console.log(solution([4,2,3,5,4],8))
