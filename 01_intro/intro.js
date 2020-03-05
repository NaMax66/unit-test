function expect(value) {
  return {
    toBe: exp => {
      if (value === exp) {
        console.log("Тест успешно пройден")
      } else {
        console.log(`Тест не пройден. Переданное значение: ${value}. Ожидаемое значение ${exp}`)
      }
    }
  }
}

const sum = (a, b) => a + b
const nativeNull = () => null

// expect(sum(8, 2)).toBe(10) // Тест успешно пройден
// expect(sum(8, 2)).toBe(300) // Тест не пройден. Переданное значение: 10. Ожидаемое значение 300

/*let a = null

console.log(a == false)

if (a) {
  console.log('%s is truthy', a)
}*/

module.exports = { sum, nativeNull }
