import axios from 'axios';
import syncFetch from 'sync-fetch';
import SessionStore from '../helpers/sessionStore';

export default class {
  static async signin(user) {
    const response = await axios.post('/API_URL', { user });
    if (response.status === 200) {
      const { data } = response;
      SessionStore.persist(data.data);
      return data.user;
    }
    SessionStore.destroy();
    throw new Error('Authentication failed!');
  }

  static async register(user) {
    const response = await axios.post('/API_URL', { user });
    if (response.status === 201) {
      return true;
    }
    throw new Error('Registration failed!');
  }

  static verifyAuthenticity() {
    try {
      const token = SessionStore.fetch();

      if (!token) return;
      const response = syncFetch('/API_URL', {
        headers: { Authorization: token },
      });
      if (response.ok) {
        const data = response.json();
        SessionStore.persist(data.data);
        return data.user;
      }
      throw Error;
    } catch {
      SessionStore.destroy();
    }
  }
}
