// print elements of array as shown in the diagram, on a single line.

let matrix = [
  [1, 8, 9],
  [2, 7, 10],
  [3, 6, 11],
  [4, 5, 12],
];

function traverse2dArray(N, M, matrix) {
  let temp = ''
  for (let j = 0; j < M; j++) {
    for (let i = N - 1; i >= 0; i--) {
      temp += matrix[i][j] + " "
    }
  }
  console.log(temp)
}
traverse2dArray(4, 3, matrix)