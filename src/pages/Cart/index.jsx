import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Alert, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { cartSelector } from "./../../reducers/cartActionsReducer";
import { Link } from "react-router-dom";
import {
  handleCalculateSubTotalAmount,
  handleCalculateTotalAmount,
  handleCurrencyFormatting,
  handleGetOrderDescription,
} from "./../../utils/helpers";
import { emptyCart, deleteFromCart } from "../../actions/cartActions";
import { placeOrder } from "../../actions/orderActions";
import styles from "./cart.module.scss";

export const Cart = () => {
  const { cart } = useSelector(cartSelector);
  const dispatch = useDispatch();

  const handleClearCart = useCallback(() => {
    dispatch(emptyCart());
  }, [dispatch]);

  const handleRemoveItem = useCallback(
    (itemId) => {
      dispatch(deleteFromCart(itemId));
    },
    [dispatch]
  );

  const handleOpenNotification = () => {
    notification.open({
      message: "Success!",
      description: "Order placed successfully.",
      icon: <SmileOutlined style={{ color: "#25f525" }} />,
    });
  };

  const handlePlaceOrder = useCallback(
    (description, amount) => {
      dispatch(placeOrder(description, amount));
      handleOpenNotification();
      setTimeout(() => {
        dispatch(emptyCart());
      }, 1000);
    },
    [dispatch]
  );

  const showCartInformation =
    cart.length < 1 ? (
      <>
        <Alert
          className={styles.alertPanel}
          message=" Cart is currently empty"
          type="info"
          showIcon
        />
        <p className={styles.redirectStatement}>
          Select an item <Link to="/">here</Link>
        </p>
      </>
    ) : (
      <section className={styles.cartDetails}>
        <div className={styles.cartOptions}>
          <Link to="/">
            <Button className={styles.addMoreToButton} type="link">
              Add More To Cart
            </Button>
          </Link>

          <Button
            onClick={handleClearCart}
            className={styles.dangerButton}
            type="text"
            danger
          >
            Clear Cart
          </Button>
        </div>

        {cart.map((cartItem) => (
          <section key={cartItem.item.id} className={styles.cartItem}>
            <span className={styles.itemName}>{cartItem.item.name} </span>
            <span className={styles.itemAmount}>
              {handleCurrencyFormatting(cartItem.item.amount)}
              {cartItem.item.type === "food" ? " per portion" : ""}
            </span>
            <span className={styles.itemQuantity}>
              qty: {cartItem.quantity}
            </span>
            <span className={styles.removeItem}>
              <Button
                onClick={() => handleRemoveItem(cartItem.item.id)}
                className={styles.dangerButton}
                type="text"
                danger
              >
                Remove item
              </Button>
            </span>
          </section>
        ))}

        <section className={styles.displayTotalAmount}>
          <div className={styles.subSection}>
            <div className={styles.displayPanel}>
              <span className={styles.label}>Subtotal </span>
              <span className={styles.subTotal}>
                {handleCalculateSubTotalAmount(cart, handleCurrencyFormatting)}
              </span>
            </div>

            <div className={styles.displayPanel}>
              <span className={styles.label}>Discount </span>
              <span className={styles.discount}>0% </span>
            </div>

            <div className={styles.displayPanel}>
              <span className={styles.label}>Delivery </span>
              <span className={styles.deliveryCharge}>Free </span>
            </div>
          </div>

          <div className={styles.subSection}>
            <div className={styles.displayPanel}>
              <span className={styles.label}>Total </span>
              <span className={styles.total}>
                {handleCalculateTotalAmount(cart, handleCurrencyFormatting)}
              </span>
            </div>
          </div>

          <Button
            onClick={() =>
              handlePlaceOrder(
                handleGetOrderDescription(cart),
                handleCalculateTotalAmount(cart)
              )
            }
            className={styles.placeOrder}
            type="primary"
          >
            Place Order
          </Button>
        </section>
      </section>
    );

  return (
    <section className={styles.cartSection}>{showCartInformation}</section>
  );
};
