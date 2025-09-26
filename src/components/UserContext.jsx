import { createContext, useContext, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    try {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      setUsers(storedUsers);
    } catch (error) {
      console.error('Failed to parse users from localStorage:', error);
      setUsers([]);
    }
  }, []);

  const addUser = (newUser) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers, { ...newUser, id: Date.now() }];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    Navigate('/');
  };

  return (
    <UserContext.Provider value={{ users, addUser, login, logout, isLoggedIn, currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider };