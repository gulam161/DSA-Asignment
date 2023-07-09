//  you have to print the sum of even elements present in the column.

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function evenSumColumns(N, M, arr) {
  for (let i = 0; i < M; i++) {
    let sum = 0;
    for (let j = 0; j < N; j++) {
      if (arr[j][i] % 2 === 0) {
        sum += arr[j][i]
      }
    }
    console.log(sum)
  }
}
evenSumColumns(3, 3, arr)