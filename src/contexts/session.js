import {
  useState,
  useEffect,
  createContext,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import Authenticator from '../apis/authenticator';
import SessionStore from '../helpers/sessionStore';

const sessionContext = createContext({ isAuthenticated: null });
const SessionProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuth] = useState(null);

  const login = useCallback((tenant) => {
    setUser(tenant);
    setIsAuth(true);
  }, []);
  const logout = useCallback(() => {
    SessionStore.destroy();
    setIsAuth(false);
    setUser();
  }, []);

  const session = useMemo(() => (
    {
      user, isAuthenticated, login, logout,
    }
  ), [user, isAuthenticated, login, logout]);

  useEffect(() => {
    if (isAuthenticated === null) {
      const tenant = Authenticator.verifyAuthenticity();
      if (tenant) {
        login(tenant);
      }
    }
  }, []);

  return (
    <sessionContext.Provider value={session}>
      {children}
    </sessionContext.Provider>
  );
};

SessionProvider.propTypes = { children: PropTypes.node.isRequired };

export const useSession = () => useContext(sessionContext);
export default SessionProvider;
