const { sum, nativeNull } = require("./intro")

describe("Sum function:", () => {
  test("should return sum of two values", () => {
    expect(sum(1, 3)).toBe(4)
    expect(sum(1, 3)).toEqual(4)
  })

  test("should return value comparing to other", () => {
    expect(sum(2, 3)).toBeGreaterThan(4)
    expect(sum(2, 3)).toBeLessThan(6)
    expect(sum(2, 3)).toBeLessThanOrEqual(5)
  })
  test("should sum 2 float values correctly", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})

describe('Native null function', () => {
  test("should return false value null", () => {
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBeFalsy() //вернет false в if
    expect(nativeNull()).toBeDefined() // не undefined
    expect(nativeNull()).not.toBeTruthy() // не undefined
    expect(nativeNull()).not.toBeUndefined()
  })
})
