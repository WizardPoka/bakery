import React, { useState } from 'react';
import styles from './GalleryCarousel.module.css';
import leftArrowIcon from '../../images/left_arrow_icon.png';
import rightArrowIcon from '../../images/right_arrow_icon.png';

function GalleryCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className={styles.galleryCarousel}>
      <button className={styles.leftArrowButton} onClick={handleClickPrev}>
        <img src={leftArrowIcon} alt="Left Arrow" className={styles.arrowIcon} />
      </button>
      <div className={styles.imageContainer}>
        <img
          src={images[prevIndex]}
          alt={`Image ${prevIndex + 1}`}
          className={styles.image}
        />
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className={`${styles.image} ${styles.active}`}
        />
        <img
          src={images[nextIndex]}
          alt={`Image ${nextIndex + 1}`}
          className={styles.image}
        />
      </div>
      <button className={styles.rightArrowButton} onClick={handleClickNext}>
        <img src={rightArrowIcon} alt="Right Arrow" className={styles.arrowIcon} />
      </button>
    </div>
  );
}

export default GalleryCarousel;
