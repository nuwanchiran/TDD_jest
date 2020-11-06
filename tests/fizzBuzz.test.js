const fb = require('../fizzBuzz')

describe('fizzBuzz', () => {
  it('should throw if input is not a number', () => {
    const args = ['xyz', null, undefined, {}]
    args.forEach(arg => expect(() => { fb.fizzBuzz(arg) }).toThrow())
  })
  it('should return FizzBuzz if input can divide using 3 and 5', () => {
    const result = fb.fizzBuzz(30)
    expect(result).toBe('FizzBuzz')
  })
  it('should return Fizz if input can divide using 3', () => {
    const result = fb.fizzBuzz(6)
    expect(result).toBe('Fizz')
  })
  it('should return Buzz if input can divide using 5', () => {
    const result = fb.fizzBuzz(10)
    expect(result).toBe('Buzz')
  })
  it('should return the input if input can not divide using 5 or 3', () => {
    const result = fb.fizzBuzz(7)
    expect(result).toBe(7)
  })
})