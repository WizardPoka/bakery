// NavbarDown.jsx
import React from 'react';
import styles from './NavbarDown.module.css';

function NavbarDown() {
  return (
    <div>
    <div className={styles.navbarDown}>
      <div className={styles.logo}>
        Logo
      </div>
      <div className={styles.column}>
        <div>О компании</div>
        <div>Продукция</div>
        <div>Доставка</div>
        <div>Торты на заказ</div>
      </div>
      <div className={styles.column}>
        <div>Торты на заказ</div>
        <div>Акции</div>
        <div>Работа в Пекарне №1</div>
      </div>
      <div className={styles.icons}>
        <div>Инстаграм</div>
        <div>Телеграм</div>
        <div>ВКонтакте</div>
        <div>example@gmail.com</div>
      </div>
      </div>
      <div className={styles.navbarDown}>
        <hr className={styles.divider} />
      </div>
      <div className={styles.navbarDown}>
      <div className={styles.footer}>
        <div>Политика конфиденциальности</div>
        <div>Публичная оферта</div>
        <div>© Пекарня №1 2023</div>
      </div>
    </div>
    </div>
  );
}

export default NavbarDown;
