import React from "react";
import styles from "./styles.module.css";
import Accordions from "../../molecules/m-accordions";
import TeamPicture from "@site/static/img/png/team-picture.png";

function FAQsSection() {
  return (
    <section className={styles.faqs__section}>
      <div className={styles.first__content}>
        <h1>Got Questions? We Have Answers.</h1>
        <p>
        Find solutions to common inquiries about Peddlesoft. Explore our Frequently Asked Questions to make the most out of your experience and ensure a smooth journey with our comprehensive management platform.
        </p>
        <div className={styles.content__button}>
          <button className="button button--primary"> Help Center </button>
          <button className="button button--secondary"> Privacy Policy </button>
        </div>
      </div>
      <div className={styles.second__content}>
        <Accordions />
      </div>
      <img className={styles.team__image} src={TeamPicture} alt="team picture" />
    </section>
  );
}

export default FAQsSection;
