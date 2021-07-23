import React from "react";
import { Link } from "react-router-dom";
import styles from "./logo.module.scss";
export const Logo = () => {
  return (
    <span className={styles.logo}>
      <Link to="/" className={styles.logoLink}>
        MealOoh
      </Link>
    </span>
  );
};
