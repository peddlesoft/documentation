import React from "react";
import styles from "./styles.module.css";

export interface DocCategoryCardProps {
    title: string;
    description: string;
    image: string;
}

function DocCategoryCard({title, description, image}: DocCategoryCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={image} alt="card image" width={32} height={32} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {/* <span className={styles.card__cta}>Learn More</span> */}
    </div>
  );
}

export default DocCategoryCard;
