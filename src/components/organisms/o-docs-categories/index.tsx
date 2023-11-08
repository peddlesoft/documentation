import React from "react";
import styles from "./styles.module.css";
import DocCategoryCard, {
  DocCategoryCardProps,
} from "../../molecules/m-doc-category-card";
import DocCategoryIcon1 from "@site/static/img/png/doc-category-icon-1.png";
import DocCategoryIcon2 from "@site/static/img/png/doc-category-icon-2.png";
import DocCategoryIcon3 from "@site/static/img/png/doc-category-icon-3.png";
import DocCategoryIcon4 from "@site/static/img/png/doc-category-icon-4.png";

const categoriesItemsList1: DocCategoryCardProps[] = [
  {
    title: "Members Database",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptas.",
    image: DocCategoryIcon1,
  },
  {
    title: "Landing Pages",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptas.",
    image: DocCategoryIcon2,
  },
];

const categoriesItemsList2: DocCategoryCardProps[] = [
  {
    title: "End-User Dashboard",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptas.",
    image: DocCategoryIcon3,
  },
  {
    title: "Admin Dashboard",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptas.",
    image: DocCategoryIcon4,
  },
];

function DocsCategoriesSection() {
  return (
    <section className={styles.documentation__section}>
      <div className={styles.first__content}>
        <h1>Documentation Categories</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
          ratione. Beatae iste laudantium id. Ex quam, perspiciatis iure
          molestiae nam consequatur eos sapiente esse voluptatibus, velit eaque
          aspernatur rem molestias!
        </p>
        <a href="docs/intro" className="button button--primary"> View </a>
      </div>
      <div className={styles.second__content}>
        <div className={styles.second__content__column__1}>
          {categoriesItemsList1.map((category, index) => (
            <DocCategoryCard key={index} {...category} />
          ))}
        </div>
        <div className={styles.second__content__column__2}>
          {categoriesItemsList2.map((category, index) => (
            <DocCategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DocsCategoriesSection;
