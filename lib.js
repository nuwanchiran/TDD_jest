//testing numbers
module.exports.absolute = function (number) {
  return (number >= 0) ? number : -number
}

module.exports.greet = function (name) {
  return `Welcome ${name}!`
}

module.exports.getCurrencies = function () {
  return ['USD', 'AUD', 'EUR']
}

module.exports.getProducts = function (productId) {
  return { id: productId, price: 10 }
}

module.exports.registerUser = function (username) {
  if (!username) throw new Error('Username is required.')
  return { id: new Date().getTime(), username }
}

module.exports.fizzBuzz = function (input) {
  if (typeof input !== 'number') throw new Error('Input should be a number')

  if (input % 15 === 0) return 'FizzBuzz'
  if (input % 3 === 0) return 'Fizz'
  if (input % 5 === 0) return 'Buzz'

  return input

}