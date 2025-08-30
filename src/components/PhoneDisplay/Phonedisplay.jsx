import React from 'react';
import styles from './PhoneDisplay.module.css';

const PhoneDisplay = ({ imageSrc, heading, bodyText }) => {
  return (
    <div className={styles.phoneDisplay}>
      <div className={styles.phoneFrame}>
        <div className={styles.phoneScreen}>
          <img src={imageSrc} alt="Feature Screenshot" className={styles.featureImage} />
        </div>
        <div className={styles.contentOverlay}>
          <h3 className={styles.heading}>{heading}</h3>
          <p className={styles.bodyText}>{bodyText}</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneDisplay;