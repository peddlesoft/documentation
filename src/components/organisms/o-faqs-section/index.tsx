import React from "react";
import styles from "./styles.module.css";
import Accordions from "../../molecules/m-accordions";
import TeamPicture from "@site/static/img/png/team-picture.png";

function FAQsSection() {
  return (
    <section className={styles.faqs__section}>
      <div className={styles.first__content}>
        <h1>Frequenty asked questions</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
          ratione. Beatae iste laudantium id. Ex quam, perspiciatis iure
          molestiae nam consequatur eos sapiente esse voluptatibus, velit eaque
          aspernatur rem molestias!
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
