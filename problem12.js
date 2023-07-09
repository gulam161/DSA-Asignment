// Traverse a 2d array - 3
// output = [9 10 11 12 8 7 6 5 1 2 3 4];

// You need to print elements of array in as shown in diagram, on a single line.

let matrix = [
  [1, 8, 9],
  [2, 7, 10],
  [3, 6, 11],
  [4, 5, 12],
];

function traverse2dArray(N, M, matrix){
    let temp = '';
  for (let j = M-1 ; j>=0; j--) {
    for (let i = 0; i<N; i++) {
      temp += matrix[i][j] + " "
    }
  }
  console.log(temp)
}
traverse2dArray(4,3, matrix)