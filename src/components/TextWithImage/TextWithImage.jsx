// TextWithImage.jsx
import React from 'react';
import styles from './TextWithImage.module.css';

const TextWithImage = ({ text, imageUrl }) => {
  return (
    <div className={styles.textWithImage}>
      <div className={styles.textContainer}>
        <p>{text}</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="Image" className={styles.image} />
      </div>
    </div>
  );
};

export default TextWithImage;
