import React from "react";
import { useSelector } from "react-redux";
import { orderSelector } from "./../../reducers/orderActionsReducer";
import { Link } from "react-router-dom";
import { Alert } from "antd";
import styles from "./orderHistory.module.scss";

export const OrderHistory = () => {
  const { order } = useSelector(orderSelector);

  const showAlert =
    order.length < 1 ? (
      <>
        <Alert
          className={styles.alertPanel}
          message=" You've placed no orders yet"
          type="warning"
        />
        <p className={styles.redirectStatement}>
          Select an item <Link to="/">here</Link>, then place an order
        </p>
      </>
    ) : null;

  return (
    <section className={styles.orderHistorySection}>
      <h1 className={styles.orderHistoryHeader}>My Orders</h1>
      {showAlert}
    </section>
  );
};
