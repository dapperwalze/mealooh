import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { cartSelector } from "./../../reducers/cartActionsReducer";
import { Link } from "react-router-dom";
import { Alert } from "antd";
import {
  calculateSubTotalAmount,
  calculateTotalAmount,
  currencyFormatter,
  getOrderDescription,
} from "./../../utils/helpers";
import { emptyCart, deleteFromCart } from "../../actions/cartActions";
import { placeOrder } from "../../actions/orderActions";
import styles from "./cart.module.scss";

export const Cart = () => {
  const { cart } = useSelector(cartSelector);
  const dispatch = useDispatch();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleClearCart = useCallback(() => {
    dispatch(emptyCart());
  }, [dispatch]);

  const handleRemoveItem = useCallback(
    (itemId) => {
      dispatch(deleteFromCart(itemId));
    },
    [dispatch]
  );
  const showAlertComponent =
    showSuccessAlert === true ? (
      <Alert
        message="Success"
        description="Order placed successfully!"
        type="success"
        closable
        onClose={() => setShowSuccessAlert(!showSuccessAlert)}
        className={styles.successAlert}
      />
    ) : null;

  const handlePlaceOrder = useCallback(
    (description, amount, fn) => {
      dispatch(placeOrder(description, amount));
      setShowSuccessAlert(true);
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

        {cart.map((item) => (
          <section key={item.id} className={styles.cartItem}>
            <span className={styles.itemName}>{item.name} </span>
            <span className={styles.itemQuantity}>qty: {item.quantity}</span>
            <span className={styles.itemAmount}>
              {currencyFormatter(item.amount)}
              {item.type === "food" ? " per portion" : ""}
            </span>
            <span className={styles.removeItem}>
              <Button
                onClick={() => handleRemoveItem(item.id)}
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
                {calculateSubTotalAmount(cart, currencyFormatter)}
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
                {calculateTotalAmount(cart, currencyFormatter)}
              </span>
            </div>
          </div>

          <Button
            onClick={() =>
              handlePlaceOrder(
                getOrderDescription(cart),
                calculateTotalAmount(cart)
              )
            }
            className={styles.placeOrder}
            type="primary"
          >
            Place Order
          </Button>
        </section>
        {showAlertComponent}
      </section>
    );

  return (
    <section className={styles.cartSection}>{showCartInformation}</section>
  );
};
