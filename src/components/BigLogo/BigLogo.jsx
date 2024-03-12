import React from 'react';
import styles from './BigLogo.module.css';
import logo_big_pancake from "../../images/logo_big_pancake.jpg";

function BigLogo() {
  return (
    <div className={styles.homeContainerBigLogo}>
      <img src={logo_big_pancake} alt="Картинка" className={styles.image} />
      <div className={styles.innerContainer}>
        <p className={styles.textBigLogoBakery}>
          ПЕЧЬ <br/> ЛЮБИТЬ <br/> РАДОВАТЬ 
        </p>
        <p className={styles.textBigLogoKatalog}>
          Перейти в каталог &nbsp;
          <span style={{ fontSize: '30px' }}>&#8594;</span>
        </p>
      </div>
    </div>
  );
}

export default BigLogo;
