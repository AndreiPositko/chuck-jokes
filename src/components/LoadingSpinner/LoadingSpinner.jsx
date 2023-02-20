import React from 'react';
import styles from './styles.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
