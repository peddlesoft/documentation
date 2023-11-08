import React from "react";
import styles from "./styles.module.css";
import PenNibStraight from "@site/static/img/png/PenNibStraight.png";

function DocCategoryCard() {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={PenNibStraight} alt="card image" width={32} height={32} />
      </div>
      <h3>Members Database</h3>
      <p>Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.</p>
      <span className={styles.card__cta}>Learn More</span>
    </div>
  );
}

export default DocCategoryCard;
