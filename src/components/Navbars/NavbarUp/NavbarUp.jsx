import React from 'react';
import styles from './NavbarUp.module.css';

function NavbarUp() {
  return (
    <div className={styles.navbarHomeUp}>
      <p>
        Выберите город 8(800)999-99-99
        <span role="img" aria-label="Heart">❤️</span>
        Корзина
      </p>
    </div>
  );
}

export default NavbarUp;
