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
        <h1 className={styles.heroHeader}>Support and Documentation</h1>
        <p className={styles.heroByeline}>
          A premium database with integrated system.
        </p>
        <div className={styles.heroSearchbar}>
          <input
          placeholder="Ask a Question or Enter a Key Work"
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
