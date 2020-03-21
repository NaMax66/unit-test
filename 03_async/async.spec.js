const axios = require('axios')
const Ajax = require('./async')

jest.mock('axios')

describe('Ajax: echo', () => {
  test('should catch error with promise',  async () => {
    try {
      await Ajax.echo()
    } catch (e) {
      expect(e.message).toBe('error')
    }
  })
})

describe('name Ajax: GET', () => {
  let res
  let todos

  beforeEach(() => {
    todos = [
      {id: 1, title: 'Todo 1', completed: false}
    ]
    res = {
      data: {
        todos
      }
    }
  })

  test('should return data from backend', () => {
    axios.get.mockReturnValue(res)

    return Ajax.get().then((data) => {
      expect(data.todos).toEqual(todos)
    })
  })
})

// https://jestjs.io/docs/en/getting-started.html
