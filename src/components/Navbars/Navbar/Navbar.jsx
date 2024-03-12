import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <p className={styles.logo}>Logo</p>
      <div className={styles.links}>
        <p>О компании</p>
        <p>Продукция</p>
        <p>Доставка</p>
        <p>Торты на заказ</p>
        <p>Акции</p>
        <p>Адреса и контакты</p>
      </div>
      <div className={styles.icons}>
        <span>&#x2764;</span>
        <span>&#x1F6D2;</span>
      </div>
    </div>
  );
}

export default Navbar;
