import React from 'react';
import styles from './Card.module.css'; // Правильный путь к модульному файлу стилей
import kurasan from "../../images/kurasan.jpg";

function Card({ height , text , imageSrc }) {
  return (
    <div className={styles.product_wrap} >
      <div className={styles.product_image}>
        <a href=""><img src={imageSrc}  height={height} alt="Product" /></a>
        
      </div>
      <div className={styles.product_list}>
        <h3>{text}</h3>
        <div className={styles.price}>&#8381; 1999</div>
      </div>
    </div>
  );
}

export default Card;
