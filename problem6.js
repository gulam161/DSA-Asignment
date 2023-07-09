//  you have to print the sum of even elements present in the row

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function evenSumRows(N, M, arr) {
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = 0; j < M; j++) {
      if (arr[i][j] % 2 === 0) {
        sum += arr[i][j]
      }
    }
    console.log(sum)
  }
}
evenSumRows(3, 3, arr)