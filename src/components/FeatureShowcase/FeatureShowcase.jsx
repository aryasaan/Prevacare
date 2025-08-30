import React, { useState, useEffect, useRef, useCallback } from 'react';
import PhoneDisplay from '../PhoneDisplay/PhoneDisplay';
import FeatureNavigation from '../FeatureNavigation/FeatureNavigation';
import ScrollArrows from '../ScrollArrows/ScrollArrows';
import styles from './FeatureShowcase.module.css';


import feature1Img from '../../assets/images/feature1.jpeg';
import feature2Img from '../../assets/images/feature2.jpeg';
import feature3Img from '../../assets/images/feature3.jpeg';
import feature4Img from '../../assets/images/feature4.jpeg';
import feature5Img from '../../assets/images/feature5.jpeg';

const featuresData = [
  { id: 1, heading: 'Feature One: Seamless Health Monitoring', bodyText: 'Track your vitals, appointments, and medication with an intuitive and unified dashboard. Stay informed, effortlessly.', imageSrc: feature1Img },
  { id: 2, heading: 'Feature Two: Smart Appointment Scheduling', bodyText: 'Easily book and manage your medical appointments with reminders, ensuring you never miss a visit.', imageSrc: feature2Img },
  { id: 3, heading: 'Feature Three: Direct Communication with Doctors', bodyText: 'Securely chat with your healthcare providers, ask questions, and get quick advice directly through the app.', imageSrc: feature3Img },
  { id: 4, heading: 'Feature Four: Secure Document Management', bodyText: 'Safely store and access your medical records, prescriptions, and test results anytime, anywhere.', imageSrc: feature4Img },
  { id: 5, heading: 'Feature Five: Personalized Wellness Plans', bodyText: 'Receive tailored health recommendations and wellness programs based on your health data and goals.', imageSrc: feature5Img },
];

const FeatureShowcase = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const showcaseRef = useRef(null);
  const scrollContainerRef = useRef(null); 
  const [isSticky, setIsSticky] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false); 

  const goToNextFeature = useCallback(() => {
    setActiveFeatureIndex((prevIndex) => (prevIndex + 1) % featuresData.length);
  }, []);

  const goToPrevFeature = useCallback(() => {
    setActiveFeatureIndex((prevIndex) => (prevIndex - 1 + featuresData.length) % featuresData.length);
  }, []);

  const handleFeatureClick = useCallback((index) => {
    setActiveFeatureIndex(index);
    setUserInteracted(true); 
  }, []);

  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.1, 0.9, 1], 
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.target === showcaseRef.current) {
          
          if (entry.intersectionRatio >= 0.1 && entry.boundingClientRect.top <= 0) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        }
      });
    };

    const showcaseObserver = new IntersectionObserver(handleIntersect, observerOptions);
    if (showcaseRef.current) {
      showcaseObserver.observe(showcaseRef.current);
    }

    
    const handleScrollAdvance = () => {
      if (!isSticky || userInteracted) return; 

      if (scrollContainerRef.current) {
        const { top, height } = scrollContainerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        
        const scrollProgress = -top / (height - viewportHeight);
        const featureScrollHeight = 1 / featuresData.length;

        if (scrollProgress > (activeFeatureIndex + 1) * featureScrollHeight + 0.1) { 
          goToNextFeature();
        } else if (scrollProgress < activeFeatureIndex * featureScrollHeight - 0.1 && activeFeatureIndex > 0) {
          // Optional
          
        }
      }
    };

    window.addEventListener('scroll', handleScrollAdvance);

    return () => {
      showcaseObserver.disconnect();
      window.removeEventListener('scroll', handleScrollAdvance);
    };
  }, [isSticky, goToNextFeature, userInteracted, activeFeatureIndex]);


  
  useEffect(() => {
    
  }, [activeFeatureIndex]);

  return (
    <section 
      ref={showcaseRef} 
      className={`${styles.featureShowcaseSection} ${isSticky ? styles.sticky : ''}`}
      style={{
        
          minHeight: `calc(15vh * ${featuresData.length + 1})`,
      }}
    >
      <div 
        ref={scrollContainerRef} 
        className={`${styles.contentWrapper} ${isSticky ? styles.isStickyContent : ''}`}
      >
        <div className={styles.featureContainer}>
          <div className={styles.leftPanel}>
            <PhoneDisplay
              imageSrc={featuresData[activeFeatureIndex].imageSrc}
              heading={featuresData[activeFeatureIndex].heading}
              bodyText={featuresData[activeFeatureIndex].bodyText}
            />
            <ScrollArrows
              onPrev={goToPrevFeature}
              onNext={goToNextFeature}
              showArrows={window.innerWidth > 768} 
            />
          </div>
          <div className={styles.rightPanel}>
            <FeatureNavigation
              features={featuresData}
              activeFeatureIndex={activeFeatureIndex}
              onFeatureClick={handleFeatureClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;