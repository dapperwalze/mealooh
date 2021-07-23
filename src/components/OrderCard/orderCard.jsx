import React from "react";
import { Button } from "antd";
import styles from "./orderCard.module.scss";

export const OrderCard = ({ orderNumber, orderDate, description, amount }) => {
  const formattedAmount = new Intl.NumberFormat("ng-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
  return (
    <div className={styles.orderCard}>
      <span className={styles.orderCardHeader}>Order No: {orderNumber}</span>
      <span className={styles.orderDate}>{orderDate}</span>
      <span className={styles.orderDescription}>{description}</span>
      <span className={styles.orderAmount}>{formattedAmount}</span>

      <Button type="primary" className={styles.button} block>
        Add To Cart
      </Button>
    </div>
  );
};
