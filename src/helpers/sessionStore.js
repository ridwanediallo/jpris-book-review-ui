const AUTH_TOKEN_KEY = 'dklsajoiweu0-59apjdlkfakoppkdsja0648pjfakl';

export default class {
  static persist(token = '') {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  static fetch() {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }

  static destroy() {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }
}
