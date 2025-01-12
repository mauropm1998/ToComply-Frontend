export class UserService {
  set userData(user) {
    localStorage.setItem('userData', JSON.stringify(user))
  }

  get userData() {
    if (localStorage.getItem('userData')) {
      return JSON.parse(localStorage.getItem('userData'))
    } else {
      return null
    }
  }

  removeUserdata() {
    localStorage.removeItem('userData')
  }
}
