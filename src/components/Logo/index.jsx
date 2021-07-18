import { Link } from "react-router-dom";
import styles from "./logo.module.scss";
export const Logo = () => {
  return (
    <span className={styles.footerLogo}>
      <Link className={styles.logoLink}>MealOoh</Link>
    </span>
  );
};
