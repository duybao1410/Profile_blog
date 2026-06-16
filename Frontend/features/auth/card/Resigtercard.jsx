import React from 'react';
import styles from '../pages/auth.module.css';

const RegisterCard = () => {
  return (
    
    <div className={`container ${styles.aboutSection}`}>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className={styles.eduCard}>
            <h2 className={styles.heading} style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
              Register
            </h2>
            
            <div className="alert alert-light border border-secondary border-dashed" role="alert">
              <p className="mb-0 text-center" style={{ color: '#555' }}>
                Registration is currently <strong>not available</strong>.
              </p>
            </div>
            
            <div className="text-center mt-4">
              <a href="/" className="btn btn-outline-dark rounded-pill">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;