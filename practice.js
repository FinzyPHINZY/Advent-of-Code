// --- Day 2: Cube Conundrum ---

// You're launched high into the atmosphere! The apex of your trajectory just barely reaches the surface of a large island floating in the sky. You gently land in a fluffy pile of leaves. It's quite cold, but you don't see much snow. An Elf runs over to greet you.

// The Elf explains that you've arrived at Snow Island and apologizes for the lack of snow. He'll be happy to explain the situation, but it's a bit of a walk, so you have some time. They don't get many visitors up here; would you like to play a game in the meantime?

// As you walk, the Elf shows you a small bag and some cubes which are either red, green, or blue. Each time you play this game, he will hide a secret number of cubes of each color in the bag, and your goal is to figure out information about the number of cubes.

// To get information, once a bag has been loaded with cubes, the Elf will reach into the bag, grab a handful of random cubes, show them to you, and then put them back in the bag. He'll do this a few times per game.

// You play several games and record the information from each game (your puzzle input). Each game is listed with its ID number (like the 11 in Game 11: ...) followed by a semicolon-separated list of subsets of cubes that were revealed from the bag (like 3 red, 5 green, 4 blue).

// For example, the record of a few games might look like this:

// In game 1, three sets of cubes are revealed from the bag (and then put back again). The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes, and 6 blue cubes; the third set is only 2 green cubes.

// The Elf would first like to know which games would have been possible if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?

// In the example above, games 1, 2, and 5 would have been possible if the bag had been loaded with that configuration. However, game 3 would have been impossible because at one point the Elf showed you 20 red cubes at once; similarly, game 4 would also have been impossible because the Elf showed you 15 blue cubes at once. If you add up the IDs of the games that would have been possible, you get 8.

// Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. What is the sum of the IDs of those games?

const cubeConundrum = (gameData) => {
  let validGamesSum = 0
  gameData.forEach((game) => {
    const maxCubes = { red: 12, green: 13, blue: 14 }
    let [gameID, colorsData] = game.split(': ')
    gameID = parseInt(gameID.replace('Game ', ''), 10)

    const groups = colorsData.split('; ')
    let isValid = true
    groups.forEach((group) => {
      const colors = group.split(', ')

      colors.forEach((entry) => {
        const [count, color] = entry.split(' ')
        if (count > maxCubes[color]) isValid = false
      })
    })

    if (isValid) {
      validGamesSum += gameID
    }
  })
  return validGamesSum
}

const input = [
  'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
  'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
  'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
  'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
  'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
]

// console.log(cubeConundrum(input));

// Trebuchet
// Function takes in lines of text.
// on each line,  the sum of the first first digit and the last digit on each line.

let inputLines = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'] - 142

const fs = require('fs')

function treb7uchet(input) {
  // convert input to array
  const values = fs.readFileSync('./trebuchet/Trebuchet.txt', 'utf-8')

  // for each item in the array, filter out the items that arent numbers characters

  return values
    .split('\n')
    .map((item) =>
      item
        .split('')
        .filter((char) => !isNaN(parseInt(char, 10)))
        .join('')
    )
    .map((item) =>
      Number(item.length > 1 ? item.at(0) + item.at(-1) : item.repeat(2))
    )
    .reduce((acc, num) => acc + num, 0)

  // check if the length is greater than 1. if it is, return the first and last number. else return the single number repeated.
}

console.log(treb7uchet(inputLines))
