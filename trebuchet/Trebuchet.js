// --- Day 1: Trebuchet?! ---

// Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems.

// You've been doing this long enough to know that to restore snow operations, you need to check all fifty stars by December 25th.

// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a trebuchet ("please hold still, we need to strap you in").

// As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.

// The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

// For example:

// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet

// In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

// Consider your entire calibration document. What is the sum of all of the calibration values?

// To begin, get your puzzle input.

// Answer:

// PREP:
// P: Takes in lines of text. I'll put that in an array of strings.
// R: It will return a number which is the sum of all the calibration values.
// E: Example is aboe. L15-L22
// P: (1) split each string in the text into single chars. (2) filter each string with the condition of isNan(Number(char)) === false. (3)map over each char and return a number. (4). if array is more than 1, return the first and last. if it's equal to 1, return the value of the single char multiplied by two. (5)return the total using reduce method.

const fs = require("fs");

let input;

try {
  input = fs.readFileSync("./Trebuchet.txt", "utf8").split("\n");
} catch (err) {
  console.error(err);
}
console.log("Is text an array?", Array.isArray(text)); // This should print true

function trebuchet(arr) {
  const values = arr.map((str) => {
    return str.split("").filter((char) => isNaN(Number(char)) === false);
  });

  const calibrationValuesArray = values
    .map((arr) => {
      if (arr.length >= 2) {
        return arr[0] + arr[arr.length - 1];
      } else {
        return arr[0] + arr[0];
      }
    })
    .map(Number)
    .reduce((sum, num) => sum + num, 0);

  return calibrationValuesArray;
}

console.log(trebuchet(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"]));

console.log(trebuchet(input));
