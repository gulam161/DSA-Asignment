// You have to print the sum of all elements in a row, on a new line.

let arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];
function sumOfRows(N, M, arr) {
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = 0; j < M; j++) {
      sum += arr[i][j]
    }
    console.log(sum)
  }
}
sumOfRows(3, 2, arr);