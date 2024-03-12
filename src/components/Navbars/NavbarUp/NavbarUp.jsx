import React from 'react';
import styles from './NavbarUp.module.css';
import locationIcon from '../../../images/location.png';

function NavbarUp() {
  return (
    <div className={styles.navbarUp}>
      <div className={styles.location}>
        <img src={locationIcon} alt="Location Icon" className={styles.icon} />
        <p className={styles.phoneNumber}>Выберите город</p>
        <span className={styles.arrow}>&#x25B2;</span>
      </div>
      <p className={styles.phoneNumber}>8(800)999-99-99</p>
    </div>
  );
}

export default NavbarUp;
