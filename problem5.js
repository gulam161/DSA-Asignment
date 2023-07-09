// You have to print the sum of indexes of the 2D array for all positions in the 2D array.

let arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];
function sumOfIndexes(N, M, arr) {
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = 0; j < M; j++) {
      sum = [i] + [j]
      // console.log(i,j)
    }
    console.log(sum)
  }
}
sumOfIndexes(3, 2, arr)