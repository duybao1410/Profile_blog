import { useContext } from 'react';
// Import your auth context
// import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  // const context = useContext(AuthContext);
  
  // if (!context) {
  //   throw new Error('useAuth must be used within AuthProvider');
  // }
  
  // return context;
  
  return {
    user: null,
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
    register: () => {},
  };
};

export default useAuth;
