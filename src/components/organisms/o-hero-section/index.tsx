import React from "react";
import styles from "./styles.module.css";
import LandingPageBg from "@site/static/img/png/landing-page-bg.png";
// import LandingPageBg from "static/img/landing-page-bg.png"

function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      <img
        loading="lazy"
        className={styles.stickyImg}
        src={LandingPageBg}
        alt="bg-image"
      />
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeader}>
          Unlocking Possibilities: Your Guide to Peddlesoft Mastery
        </h1>
        <p className={styles.heroByeline}>
          Explore step-by-step guides and harness the full potential of
          Peddlesoft's versatile features for streamlined payments, event
          management, training, voting, and membership — Your comprehensive
          resource for seamless navigation and empowerment.
        </p>
        <div className={styles.heroSearchbar}>
          <input
            placeholder="Ask a Question"
            className={styles.heroSearchInput}
            type="text"
            name="search"
            id="search-bar"
          />
          <button className={styles.heroSearchButton} type="submit">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
