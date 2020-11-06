module.exports.fizzBuzz = function (input) {
  if (typeof input !== 'number') throw new Error('Input should be a number')

  if (input % 15 === 0) return 'FizzBuzz'
  if (input % 3 === 0) return 'Fizz'
  if (input % 5 === 0) return 'Buzz'

  return input
}