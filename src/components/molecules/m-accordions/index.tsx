import React from "react";
import styles from "./styles.module.css";
import Accordion from "../../atoms/a-accordion";

const accordionItems = [
  {
    question: "How do I get started?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien ultricies nunc, vitae aliqua",
  },
  {
    question: "What is the best way to use the app?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien ultricies nunc, vitae aliqua",
  },
  {
    question: "Today is a good day?",
    answer: "Yes, today is a good day.",
  },
  {
    question: "What is the best way to use the app?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien ultricies nunc, vitae aliqua. nisl sed aliquam ultricies, nunc sapien ultricies nunc, vitae aliqua. nisl sed aliquam ultricies, nunc sapien ultricies nunc, vitae aliqua. nisl sed aliquam ultricies, nunc sapien ultricies nunc, vitae aliquanisl sed aliquam ultricies, nunc sapien ultricies nunc, vitae aliqua",
  },
  {
    question: "Who is the best?",
    answer: "You are the best.",
  },
];

function Accordions() {
  return (
    <div className={styles.accordion__container}>
      {accordionItems.map((item, index) => (
        <Accordion key={index} {...item} />
      ))}
    </div>
  );
}

export default Accordions;
