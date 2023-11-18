import React from "react";
import styles from "./styles.module.css";
import Accordion from "../../atoms/a-accordion";

const accordionItems = [
  {
    question: "How do I register for membership using Peddlesoft's MMS?",
    answer:
      "Simply navigate to the Membership Management System (MMS) section and follow the intuitive registration process. Fill in the required details, create your profile, and gain access to a range of membership benefits seamlessly.",
  },
  {
    question: "Can I customize the external pages in the Content Management System (CMS)?",
    answer:
      "Yes, Peddlesoft's CMS allows you to effortlessly customize external web pages. Showcase your organization's information, events, and engage members with dynamic content that suits your brand and communication style.",
  },
  {
    question: "How does Peddlesoft's EMS simplify event management?",
    answer: "Peddlesoft's Event Management System (EMS) streamlines the entire event lifecycle. From planning to post-production, manage conferences, attendance, and social engagement tools effortlessly, optimizing attendee experiences and ensuring successful events.",
  },
  {
    question: "What features does Peddlesoft's TMS offer for online training programs?",
    answer:
      "Peddlesoft's Training Management System (TMS) integrates Course Management System (CMS) and Learning Management System (LMS). Experience streamlined course creation, enrollment, communication, and assessment for impactful online training experiences.",
  },
  {
    question: "How does Peddlesoft's PMS simplify financial transactions?",
    answer: "Peddlesoft's Payment Management System (PMS) simplifies financial transactions with features like invoice generation, payment records management, analytics, and reminders. Experience smooth transactions, accurate records, and valuable financial insights.",
  },
  {
    question: "Is the Electronic Voting System (EVS) secure for conducting elections?",
    answer: "Yes, Peddlesoft's EVS provides a secure and efficient platform for electronic voting and elections. With digital tools replacing traditional methods, ensure accuracy, transparency, and accessibility for informed decision-making in your organization.",
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
