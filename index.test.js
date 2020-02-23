const {
  describe,
  it,
  expect,
  matchers
} = require('./index')

let add = (a, b) =>  a + b
let subtract = (a, b) =>  a - b
let divide = (a, b) =>  a / b
let multiply = (a, b) => a * b

describe('Add()', () => {
  it('adds two numbers', () => {
    const result = add(1, 2)
    expect(result).toBe(3)
  })
})

describe('subtract()', () => {
  it('subtract two numbers', () => {
    const result = subtract(10, 2)
    expect(result).toBe(8)
  })
})

describe('multiply()', () => {
  it('multiplies two numbers', () => {
    const result = multiply(5, 2)
    expect(result).toBe(10)
  })
})

describe('divide()', () => {
  it('divides two numbers', () => {
    const result = divide(10, 2)
    expect(result).toBe(5)
  })
})