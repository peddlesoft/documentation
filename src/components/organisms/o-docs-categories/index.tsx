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
    title: "Dynamic Content Showcase",
    description:
    "Unleash the potential of Peddlesoft's CMS, empowering organizations to effortlessly create, modify, and organize website content. Showcase events, engage members, and promote information dynamically with external web pages and intuitive content management.",
    image: DocCategoryIcon1,
  },
  {
    title: "Securing Elections Digitally",
    description:
    "Uncover the power of Peddlesoft's E-Voting System. This guide provides insights into securely conducting group votes and elections, utilizing advanced software for a robust and trusted digital voting experience.",
    image: DocCategoryIcon2,
  },
];

const categoriesItemsList2: DocCategoryCardProps[] = [
  {
    title: "Impactful Training Delivery",
    description:
      "Discover Peddlesoft's TMS, seamlessly integrating LMS for effective online training programs. Streamline course creation, enrollment, communication, and assessment to deliver engaging and impactful training experiences for your members.",
    image: DocCategoryIcon3,
  },
  {
    title: "Navigating Automated Payments",
    description:
    "Embark on a journey to master Peddlesoft's Automated Payment System. Learn the art of handling financial transactions seamlessly, streamlining collections, and maintaining meticulous payment records.",
    image: DocCategoryIcon4,
  },
];

function DocsCategoriesSection() {
  return (
    <section className={styles.documentation__section}>
      <div className={styles.first__content}>
        <h1>Documentation Categories</h1>
        <p>
        Navigate Your Peddlesoft Journey: Explore In-Depth Guides Across Key Categories!
        </p>
        <a href="docs/intro" className="button button--primary"> Explore Documentation </a>
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
