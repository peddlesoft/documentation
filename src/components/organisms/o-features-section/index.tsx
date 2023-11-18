import React from "react";
import FeatureCard, { FeatureCardProps } from "../../molecules/m-feature-card";
import styles from "./styles.module.css";
import FeatureImg1 from "@site/static/img/png/feature-1.png";
import FeatureImg2 from "@site/static/img/png/feature-3.png";
import FeatureImg3 from "@site/static/img/png/feature-2.png";

const featureItemsList: FeatureCardProps[] = [
  {
    title: "Effortless Financial Management",
    description:
      "Master Peddlesoft's automated payment system for a hassle-free approach to financial management. Streamline collections and recordings, making auditing a breeze",
    image: FeatureImg1,
  },
  {
    title: "Event Excellence Simplified",
    description:
      "From planning to post-production, delve into the world of event brilliance. Automate registrations, ticketing, and analytics with Peddlesoft's comprehensive conference management.",
    image: FeatureImg2,
  },
  {
    title: "Unified Membership Solutions",
    description:
      "Simplify member interactions with Peddlesoft. From profile creation to fee payments, our platform brings harmony to membership management, ensuring a seamless experience for all.",
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
