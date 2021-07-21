import React, { useState, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Modal } from "antd";
import { ItemCountToggler } from "./../ItemCountToggler/index";
import { ItemName } from "./../ItemName/index";
import { ItemPrice } from "./../ItemPrice/index";
import { addToCart } from "./../../actions/cartActions";
import allFoodItems from "../../mealData/index";
import styles from "./modal.module.scss";

const ModalComponent = ({
  dispatch,
  cart,
  isModalVisible,
  setIsModalVisible,
}) => {
  const [itemCount, setItemCount] = useState(1);
  let history = useHistory();
  let { id } = useParams();
  let selectedItem = allFoodItems.find((item) => item.id === id);

  const decrementCount = () => {
    setItemCount((prevValue) =>
      prevValue > 1 ? prevValue - 1 : (prevValue = 1)
    );
  };

  const incrementCount = () => {
    setItemCount((prevValue) => prevValue + 1);
  };

  const handleCancel = useCallback(
    (e) => {
      e.stopPropagation();
      setIsModalVisible(false);
      history.goBack();
    },
    [history, setIsModalVisible]
  );
  const handleAddToCart = useCallback(
    (e) => {
      dispatch(
        addToCart(
          selectedItem.id,
          selectedItem.name,
          selectedItem.amount,
          itemCount
        )
      );
      e.stopPropagation();
      setIsModalVisible(false);
      history.goBack();
    },
    [
      dispatch,
      selectedItem.id,
      selectedItem.name,
      selectedItem.amount,
      itemCount,
      setIsModalVisible,
      history,
    ]
  );

  if (!selectedItem) return null;

  return (
    <Modal
      title="Item Details"
      visible={isModalVisible}
      okText="Add To Cart"
      onOk={handleAddToCart}
      onCancel={handleCancel}
      okButtonProps={{ disabled: false }}
      cancelButtonProps={{ disabled: false }}
      centered
      className={styles.modal}
    >
      <section className={styles.imageCardSection}>
        <img
          className={styles.image}
          alt={selectedItem.name}
          src={`../../${selectedItem.url}`}
        />
      </section>

      <section className={styles.selectedItemDetailsSection}>
        <ItemName name={selectedItem.name} />
        <section className={styles.itemDescription}>
          <p className={styles.descriptionContent}>
            {selectedItem.description}
          </p>
        </section>

        <div className={styles.selectedItemPriceAndQty}>
          <ItemPrice
            price={selectedItem.amount}
            type={selectedItem.type === "food" ? " per portion" : ""}
          />
          <ItemCountToggler
            itemCount={itemCount}
            decrementCount={decrementCount}
            incrementCount={incrementCount}
          />
        </div>
      </section>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(ModalComponent);
