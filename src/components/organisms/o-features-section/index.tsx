import React from "react";
import FeatureCard, { FeatureCardProps } from "../../molecules/m-feature-card";
import styles from "./styles.module.css";
import FeatureImg1 from "@site/static/img/png/feature-1.png";
import FeatureImg2 from "@site/static/img/png/feature-3.png";
import FeatureImg3 from "@site/static/img/png/feature-2.png";

const featureItemsList: FeatureCardProps[] = [
  {
    title: "Knowledge Base",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: FeatureImg1,
  },
  {
    title: "Contact Us",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: FeatureImg2,
  },
  {
    title: "Community Forum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: FeatureImg3,
  },
];



function FeaturesSection() {
  return (
    <section className={styles.featuresList}>
      {featureItemsList.map((featureItem, index) => (
        <FeatureCard key={index} {...featureItem} />
      ))}
    </section>
  );
}

export default FeaturesSection;
