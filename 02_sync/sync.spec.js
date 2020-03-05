const Lodash = require('./sync')

describe('Lodash: compact', () => {
  const _ = new Lodash()
  test('should be defined', () => {
    expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined()
  })
  /* сначала описываем тест кейс, потом саму фукнцию */
  test('should remove falsy values from array', () => {
    const array =[false, 42, 0, '', true, null, 'hello']
    const result = [42, true, 'hello']
    // expect(_.compact(array)).toBe(result) toBe для примитивов
    expect(_.compact(array)).toEqual(result)
  })
})
