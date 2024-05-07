"use client";
import styles from "./styles.module.scss";
import arrow from "@/assets/img/arrow-down-white.svg";
import { useState } from "react";

const Dropdown = ({ children, title, initial, isHome = false }) => {
  const [toggle, setToggle] = useState(initial);

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => setToggle(!toggle)}>
        <p className={isHome ? styles.title : styles.titleHome}>{title}</p>
        <img
          src={arrow}
          alt=""
          className={
            toggle
              ? `${styles.image} ${styles.imageOpen}`
              : `${styles.image} ${styles.imageClosed}`
          }
        />
      </button>
      <div
        className={`${styles.dropdown} ${
          toggle ? styles.dropdownOpen : styles.dropdownClosed
        }`}
      >
        <div className={styles.dropdownContent}>{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
