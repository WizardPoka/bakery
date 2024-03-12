import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbarHome}>
      <p>
        Logo О компании Продукция Доставка Торты на заказ Акции Адреса и контакты
        <span role="img" aria-label="Heart">❤️</span>
        Корзина
      </p>
    </div>
  );
}

export default Navbar;
