import React, { useState } from 'react';
import styles from './styles.module.css';

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.dropdown__container} ${isOpen ? styles.open : ''}`}>
      <header className={`${styles.header} ${styles.clearfix} ${isOpen ? styles.active : ''}`} onClick={toggleAccordion}>
        <h2>{question}</h2>
        <figure className={`${styles.expand} ${isOpen ? styles.open : ''} ${isOpen ? styles.expandClosing : ''}`}>
          <span>+</span>
        </figure>
      </header>
      <article className={styles.article} style={{ maxHeight: isOpen ? '1000px' : '0px' }}>
        <div className={styles.articleInner}>
          {answer}
        </div>
      </article>
    </div>
  );
};

export default Accordion;
