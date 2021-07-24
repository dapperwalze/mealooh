import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Button, Popconfirm, message, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { currencyFormatter } from "./../../utils/helpers";
import { deletefromHistory, placeOrder } from "../../actions/orderActions";

import styles from "./orderCard.module.scss";

export const OrderCard = ({ orderId, orderDate, description, amount }) => {
  const dispatch = useDispatch();
  const formattedAmount = currencyFormatter(amount);

  const confirm = () => {
    message.success("Deleted from history");
  };

  const openNotification = () => {
    notification.open({
      message: "Success!",
      description: "Order placed successfully.",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };
  const handleRemoveItem = useCallback(
    (itemId) => {
      dispatch(deletefromHistory(itemId));
      confirm();
    },
    [dispatch]
  );

  const handleReOrder = useCallback(() => {
    dispatch(placeOrder(description, amount));
    openNotification();
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
          onClick={() => handleReOrder(description, amount)}
          type="link"
          className={styles.addToCartButton}
        >
          Re-Order
        </Button>
      </div>
    </div>
  );
};
