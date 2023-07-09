// Go in Zig-Zag
// Sample Output =[7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 7 7 4 7 7 5 5 2 6 8]

// Print the matrix elements starting from the top right corner and follow a zig-zag pattern.

let matrix = [
  [4, 7, 1, 1, 7],
  [8, 9, 9, 6, 1],
  [6, 4, 9, 5, 1],
  [7, 7, 4, 7, 7],
  [8, 6, 2, 5, 5]
];

function goInZigZag(N, M, matrix) {
  let temp = '';
  for (let k = 0; k < M; k++) {
    if (k % 2 === 0) {
      for (let i = M - 1; i >= 0; i--) {
        temp += matrix[k][i] + " "
      }
    } else {
      for (let j = 0; j < N; j++) {
        temp += matrix[k][j] + " "
      }
    }
  }
  console.log(temp)
}
goInZigZag(5, 5, matrix)