const lib = require('../lib')

//specific🤔
describe('absolute', () => {
  it('should return a positive number if input is positive', () => {
    const result = lib.absolute(1)
    expect(result).toBe(1)
  })
  it('should return a positive number if input is negative', () => {
    const result = lib.absolute(-1)
    expect(result).toBe(1)
  })
  it('should return 0 if input is 0', () => {
    const result = lib.absolute(0)
    expect(result).toBe(0)
  })
})

//regex to find general result AKA not specific😊
describe('greet', () => {
  it('should return the greeting message', () => {
    const result = lib.greet('Chiran')
    expect(result).toMatch(/Chiran/)

    //no need regex in this way😁
    expect(result).toContain('Chiran')
  })
})

describe('getCurrencies', () => {
  it('should return supported currencies', () => {
    const result = lib.getCurrencies()
    //does not matter the order of the array
    expect(result).toEqual(expect.arrayContaining(['AUD', 'USD', 'EUR']))
  })
})

describe('getProducts', () => {
  it('should return the product with given id', () => {
    const result = lib.getProducts(1)

    // toBe is not working because both objects have different memory locations💩
    // use toEqual instead
    expect(result).toEqual({ id: 1, price: 10 })

    //but toEqual care about the object structure.
    //that's why the second way is good. It only care about these properties are exists😊
    expect(result).toMatchObject({ id: 1, price: 10 })
    expect(result).toHaveProperty('id', 1)
  })
})

describe('registerUser', () => {
  it('should throw if username is falsy', () => {

    //falsy data types
    const args = [null, undefined, false, '', NaN, 0]

    //calling the function inside the expect because the function does not return anything when throwing errors
    args.forEach(arg => expect(() => { lib.registerUser(arg) }).toThrow())

  })
  it('should return a user object if valid username is passed', () => {
    const result = lib.registerUser('nuwanchiran')
    expect(result).toMatchObject({ username: 'nuwanchiran' })
    expect(result.id).toBeGreaterThan(0)
  })
})