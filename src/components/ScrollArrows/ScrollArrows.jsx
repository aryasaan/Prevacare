import React from 'react';
import styles from './ScrollArrows.module.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const ScrollArrows = ({ onPrev, onNext, showArrows = true }) => {
  if (!showArrows) return null;

  return (
    <div className={styles.scrollArrows}>
      <button onClick={onPrev} className={styles.arrowButton}>
        <MdChevronLeft />
      </button>
      <button onClick={onNext} className={styles.arrowButton}>
        <MdChevronRight />
      </button>
    </div>
  );
};

export default ScrollArrows;