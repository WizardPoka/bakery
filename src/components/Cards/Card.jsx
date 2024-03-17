import React from 'react';
import styles from './Card.module.css'; // Правильный путь к модульному файлу стилей
import kurasan from "../../images/kurasan.jpg";

function Card({ width , text , imageSrc }) {
  return (
    <div className={styles.product_wrap} >
      <div className={styles.product_image}>
        <a href=""><img src={imageSrc} width={300} height={300} alt="Product" /></a>
        <div className={styles.shadow}></div>
        <div className={styles.actions}>
          {/* <div className={styles.actions_btn}>
            <div className={styles.add_to_cart}>
              <a className={styles.add_to_cart_button} href="#" title="Добавить в корзину"></a>
            </div>
            <div className={styles.add_to_links}>
              <div className={styles.add_to_wishlist}>
                <a className={styles.add_to_wishlist_button} href="#" title="Добавить в мои желания"></a>
              </div>
              <div className={styles.add_to_compare}>
                <a className={styles.add_to_compare_button} href="#" title="Добавить для сравнения"></a>
              </div>
              <div className={styles.quikview}>
                <a className={styles.quikview_button} href="#" title="Быстрый просмотр"></a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className={styles.product_list}>
        <h3>Салат «Столичный» с курицей</h3>
        <div className={styles.price}>&#8381; 1999</div>
      </div>
    </div>
  );
}

export default Card;
