import React from 'react';
import styles from './auth.module.css';
import { Navbar } from '../../../componets/layout/Navbar';
import LoginCard from '../card/Logincard';  

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <LoginCard />
    </div>
  );
};

export default LoginPage;