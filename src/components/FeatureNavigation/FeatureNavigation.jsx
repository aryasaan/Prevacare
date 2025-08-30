import React from 'react';
import styles from './FeatureNavigation.module.css';
import { MdCheckCircle, MdOutlineMonitorHeart, MdOutlineCalendarToday, MdOutlineChatBubbleOutline, MdOutlineCloudUpload } from 'react-icons/md';

const icons = [
  <MdOutlineMonitorHeart />,
  <MdOutlineCalendarToday />,
  <MdOutlineChatBubbleOutline />,
  <MdOutlineCloudUpload />,
  <MdCheckCircle />, 
];

const FeatureNavigation = ({ features, activeFeatureIndex, onFeatureClick }) => {
  return (
    <nav className={styles.featureNav}>
      <ul className={styles.navList}>
        {features.map((feature, index) => (
          <li
            key={feature.id}
            className={`${styles.navItem} ${index === activeFeatureIndex ? styles.active : ''}`}
            onClick={() => onFeatureClick(index)}
          >
            <span className={styles.iconWrapper}>{icons[index] || <MdCheckCircle />}</span>
            <span className={styles.featureTitle}>{feature.heading.split(':')[0]}</span> 
            <div className={styles.indicator}></div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FeatureNavigation;