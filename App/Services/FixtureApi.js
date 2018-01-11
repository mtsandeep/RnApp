export default {
  // Functions return fixtures
  login: (email, password, simulateWrong = false) => {
    return new Promise(function (resolve, reject) {
      if (!simulateWrong) {
        const data = require('../Fixtures/login.json')
        setTimeout(() => {
          resolve({
            ok: true,
            data: data
          })
        }, 1000)
      } else {
        reject(new Error({
          ok: false,
          error: 'User not valid'
        }))  // error, rejected
      }
    })
  },
  logout: () => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve({
          ok: true,
          data: []
        })
      }, 1000)
    })
  }
}
