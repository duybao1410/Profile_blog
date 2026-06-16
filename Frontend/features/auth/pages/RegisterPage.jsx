import React from 'react';
import styles from './auth.module.css';
import { Navbar } from '../../../componets/layout/Navbar';
import RegisterCard from '../card/Resigtercard';  

const RegisterPage = () => {
  return (
    <div>
      <Navbar />
      <RegisterCard />
    </div>
  );
};

export default RegisterPage;