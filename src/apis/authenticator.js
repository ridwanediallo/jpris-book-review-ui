import axios from 'axios';
import SessionStore from '../helpers/sessionStore';

export default class {

  static async signin(user) {
    const response = await axios.post('/API_URL', { user });
    if (response.ok) {
      const { data } = response;
      SessionStore.persist(data.data);
      return data.user;
    }
    SessionStore.destroy();
    throw Error(response.error);
  }
  
  static async register(user) {
    const response = await axios.post('/API_URL', { user });
    if (response.ok) {
        return true;
    }
    throw Error(response.error);
  }
  
  static verifyAuthenticity() {
    try {
      const response = axios.get({});
      if (response.ok) return response.json();
      throw Error;
    } catch {
      SessionStore.destroy();
    }
  }
}
