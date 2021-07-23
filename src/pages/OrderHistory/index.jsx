import React from "react";
//import { useSelector } from "react-redux";
//import { orderSelector } from "./../../reducers/orderActionsReducer";
import { Link } from "react-router-dom";
import { Alert } from "antd";
import { OrderCard } from "./../../components/OrderCard/orderCard";
import styles from "./orderHistory.module.scss";

export const OrderHistory = () => {
  // const { order } = useSelector(orderSelector);
  const order = [1, 2, 3, 4];

  const showAlert =
    order.length < 1 ? (
      <>
        <Alert
          className={styles.alertPanel}
          message=" You've placed no orders yet"
          type="info"
          showIcon
        />
        <p className={styles.redirectStatement}>
          Select an item <Link to="/">here</Link>, then place an order
        </p>
      </>
    ) : (
      <div className={styles.displayOrderCards}>
        <OrderCard
          orderNumber={43212}
          orderDate={new Date().toLocaleString()}
          description="Fried Rice"
          amount={1035}
        />
        <OrderCard
          orderNumber={43212}
          orderDate={new Date().toLocaleString()}
          description="Fried Rice"
          amount={1035}
        />
        <OrderCard
          orderNumber={43212}
          orderDate={new Date().toLocaleString()}
          description="Fried Rice"
          amount={1035}
        />
        <OrderCard
          orderNumber={43212}
          orderDate={new Date().toLocaleString()}
          description="Fried Rice"
          amount={1035}
        />
        <OrderCard
          orderNumber={43212}
          orderDate={new Date().toLocaleString()}
          description="Fried Rice "
          amount={1035}
        />
      </div>
    );

  return <section className={styles.orderHistorySection}>{showAlert}</section>;
};
