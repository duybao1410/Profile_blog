import React from 'react';

export const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-container">
        {/* Auth content */}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
