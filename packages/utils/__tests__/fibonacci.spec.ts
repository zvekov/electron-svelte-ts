import { fibonacci } from '../src/fibonacci'

describe('Fibonacci number', () => {
  it('the first number is 1', () => {
    expect(fibonacci(0)).toBe(1)
  })

  it('the second number is also 1', () => {
    expect(fibonacci(1)).toBe(1)
  })

  it('the third number is 2', () => {
    expect(fibonacci(2)).toBe(2)
  })

  it('the fourth number is 3', () => {
    expect(fibonacci(3)).toBe(3)
  })

  it('the fifth number is 5', () => {
    expect(fibonacci(4)).toBe(5)
  })

  it('the sixth number is 8', () => {
    expect(fibonacci(5)).toBe(8)
  })
})