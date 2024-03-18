// TextWithImage.jsx
import React from 'react';
import styles from './TextWithImage.module.css';

const TextWithImage = ({ text, imageUrl }) => {
  return (
    <div className={styles.textWithImage}>
      <div className={styles.textContainer}>
        <h2>Лого</h2>
        <p>
          Мы производим хлеб полного цикла: ведем закваски, варим заварки, следуем технологии длительного брожения — всё это позволяет добиться максимального аромата и длительности сохранения свежести хлеба. Наша гордость — это линейка хлебов на 300-летней закваске из Италии.
        </p>
        <p>
          Мы сами ищем, выбираем и покупаем зеленое кофейное зерно у фермеров прямо там, где оно растет. Обжариваем его исходя из собственных профилей, специально подобранных, чтобы раскрыть лучший вкус зерна уровня speciality.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="Image" className={styles.image} />
      </div>
    </div>
  );
};

export default TextWithImage;
