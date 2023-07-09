// N denotes the number of rows, and M denotes the number of columns.You have to print the elements of the 2D array, row by row

let arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];
function array2D(N, M, arr) {
  for (let i = 0; i < N; i++) {
    let bag = ""
    for (let j = 0; j < M; j++) {
      bag += arr[i][j] + " "

    }
    console.log(bag)
  }
}
array2D(3, 2, arr)
