// 两数之和
function twoSum(nums, target) {
  const find = new Map();
  let result;
  nums.forEach((e, i) => {
    const idx = find.get(target - e);
    if (typeof idx === 'number' ){
      result = [i, idx]; return;
    }
    find.set(e, i);
  });
  return result;
};

console.log(twoSum([2,7,11,15], 9))

