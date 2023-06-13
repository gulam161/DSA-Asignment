let exist_elem;
let count = 0;
const nums = [2, 4, 5, 5, 5, 5, 5];

function findMajorityElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      exist_elem = arr[i];
    }
  }

  count = 0; // Reset count before the next loop

  for (let i = 0; i < arr.length; i++) {
    if (exist_elem === arr[i]) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return exist_elem;
  } else {
    return -1;
  }
}

const result = findMajorityElement(nums);
console.log(result);
