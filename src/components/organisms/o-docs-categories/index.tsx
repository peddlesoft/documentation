import React from "react";
import styles from "./styles.module.css";
import DocCategoryCard from "../../molecules/m-doc-category-card";

function DocsCategoriesSection() {
  return (
    <section className={styles.documentation__section}>
      <div className={styles.first__content}>
        <h1>Documetation Categories</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
          ratione. Beatae iste laudantium id. Ex quam, perspiciatis iure
          molestiae nam consequatur eos sapiente esse voluptatibus, velit eaque
          aspernatur rem molestias!
        </p>
        <button className="button button--primary"> View </button>
      </div>
      <div className={styles.second__content}>
        <div className={styles.second__content__column__1}>
          <DocCategoryCard />
          <DocCategoryCard />
        </div>
        <div className={styles.second__content__column__2}>
          <DocCategoryCard />
          <DocCategoryCard />
        </div>
      </div>
    </section>
  );
}

export default DocsCategoriesSection;
