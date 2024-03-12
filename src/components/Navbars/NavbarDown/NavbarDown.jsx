import React from 'react';
import styles from './NavbarDown.module.css';

function NavbarDown() {
  return (
    <div>
      <div className={styles.navbarHomeDown}>
        <p>
          Выберите город 8(800)999-99-99
          <span role="img" aria-label="Heart">❤️</span>
          Корзина
        </p>
      </div>
    </div>
  );
}

export default NavbarDown;
