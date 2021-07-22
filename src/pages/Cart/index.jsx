import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Alert } from "antd";
import styles from "./cart.module.scss";
import { cartSelector } from "./../../reducers/cartActionsReducer";

export const Cart = () => {
  const { cart } = useSelector(cartSelector);
  const showAlert =
    cart.length < 1 ? (
      <>
        <Alert
          className={styles.alertPanel}
          message=" Cart is currently empty"
          type="warning"
        />
        <p className={styles.redirectStatement}>
          Select an item <Link to="/">here</Link>
        </p>
      </>
    ) : null;
  return (
    <section className={styles.cartSection}>
      <h1 className={styles.cartHeader}>My Cart</h1>
      {showAlert}
    </section>
  );
};
