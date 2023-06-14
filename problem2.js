const nums = [4, 3, 2, 7, 8, 2, 3, 1];
function findDuplicates(nums) {
  const duplicates = [];

  for (let i = 0; i < nums.length; i++) {
    const currentNum = Math.abs(nums[i]);

    if (nums[currentNum - 1] < 0) {
      duplicates.push(currentNum);
    } else {
      nums[currentNum - 1] *= -1;
    }
  }

  return duplicates;
}
const result = findDuplicates(nums);
console.log(result);
