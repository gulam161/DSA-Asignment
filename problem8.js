// The 2D array is stored in a variable with the name arr, and contains lower case English characters- You have to print [Yes], if any particular row of a 2D array contains at least one vowel, at least print [No]:-

let arr = [
  ['a','b'],
  ['c', 'd'],
  ['e', 'f'],
];

function vowelsInRows(N, M, arr) {
  for (let i = 0; i < N; i++) {
    let temp = 0;
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === "a" || arr[i][j] === "e" || arr[i][j] === "i" || arr[i][j] === "o" || arr[i][j] === "u") {
        temp++
      }
    }
    if (temp !== 0) {
      console.log("Yes")
    } else {
      console.log("No")
    }
  }
}
vowelsInRows(3, 2, arr)