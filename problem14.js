// Programming Question: Longest Word in a String

/// Q: Write a function findLongestword that takes a string as input and returns the longest word in the string. If there are multiple longe the first one encountered.

//* Constraints:
// The input string may contain alphabetic characters, digits, spaces, and punctuation.
// The input string is non-empty.
// The input string may contain multiple words separated by spaces.

// Note:
//? If the input string is empty or contains only whitespace, the function should return an false.The function should ignore leading and trailing whitespace when determining the longest word.

const FindLongestword = (str) => {
  if (str.trim().length === "") {
    return false;
  }

  //  using methods:
  let longestWord = str.split(" ");
  //   longestWord = longestWord.sort((a, b) => a.length - b.length);
  //   return longestWord.at(-1);

  //   using reduce method:
  //   return longestWord.reduce((accum, curWord) =>
  //     curWord.length > accum.length ? curWord : " "
  //   );

  longestWord.forEach((e) => {
    if (e.length > longestWord.length) {
      longestWord = e;
    }
  });

  return longestWord;
};

console.log(
  FindLongestword(
    "JavaScript is the world's most popular programming language."
  )
);
