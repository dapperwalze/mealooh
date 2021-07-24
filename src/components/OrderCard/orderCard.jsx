import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Button, Popconfirm, message } from "antd";
import { currencyFormatter } from "./../../utils/helpers";
import {
  addToCartFromHistory,
  deletefromHistory,
} from "../../actions/orderActions";

import styles from "./orderCard.module.scss";

export const OrderCard = ({ orderId, orderDate, description, amount }) => {
  const dispatch = useDispatch();
  const formattedAmount = currencyFormatter(amount);

  const confirm = () => {
    message.success("Deleted from history");
  };

  const handleRemoveItem = useCallback(
    (itemId) => {
      dispatch(deletefromHistory(itemId));
      confirm();
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
        <Popconfirm
          title="Are you sure you want to delete this item from your history?"
          onConfirm={() => handleRemoveItem(orderId)}
          okText="Yes"
          cancelText="No"
        >
          <Button className={styles.dangerButton} type="text" danger>
            Delete from history
          </Button>{" "}
        </Popconfirm>

        <Button
          onClick={() => handleAddToCart(description, amount)}
          type="link"
          className={styles.addToCartButton}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};
