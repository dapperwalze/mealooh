import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import { currencyFormatter } from "./../../utils/helpers";
import {
  addToCartFromHistory,
  deletefromHistory,
} from "../../actions/orderActions";

import styles from "./orderCard.module.scss";

export const OrderCard = ({ orderId, orderDate, description, amount }) => {
  const dispatch = useDispatch();
  const formattedAmount = currencyFormatter(amount);

  const handleRemoveItem = useCallback(
    (orderId) => {
      dispatch(deletefromHistory(orderId));
    },
    [dispatch]
  );

  const handleAddToCart = useCallback(() => {
    dispatch(addToCartFromHistory(description, amount));
  }, [dispatch, description, amount]);

  return (
    <div className={styles.orderCard}>
      <span className={styles.orderCardHeader}>Order ID: {orderId}</span>
      <span className={styles.orderDate}>{orderDate}</span>
      <span className={styles.orderDescription}>{description}</span>
      <span className={styles.orderAmount}>{formattedAmount}</span>

      <div className={styles.btnGroup}>
        <Button
          onClick={handleRemoveItem}
          className={styles.dangerButton}
          type="text"
          danger
        >
          Delete from history
        </Button>
        <Button
          onClick={handleAddToCart}
          type="link"
          className={styles.addToCartButton}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};
