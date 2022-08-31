import React, { useState, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Modal } from "antd";
import { ItemCountToggler } from "./../ItemCountToggler/index";
import { ItemName } from "./../ItemName/index";
import { ItemPrice } from "./../ItemPrice/index";
import { addToCart } from "./../../actions/cartActions";
import allFoodItems from "../../mealData/index";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import styles from "./modal.module.scss";

const ModalComponent = ({ isModalVisible, handleSetIsModalVisible }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  let { id } = useParams();
  let selectedItem = allFoodItems.find((item) => item.id === id);
  const [itemCount, setItemCount] = useState(1);

  const handleDecrementCount = useCallback(() => {
    setItemCount((itemCount) =>
      itemCount > 1 ? itemCount - 1 : (itemCount = 1)
    );
  }, []);

  const handleIncrementCount = useCallback(() => {
    setItemCount((itemCount) => itemCount + 1);
  }, []);

  const handleCancel = useCallback(
    (e) => {
      e.stopPropagation();
      handleSetIsModalVisible(false);
      history.goBack();
    },
    [history, handleSetIsModalVisible]
  );

  const openNotification = () => {
    notification.open({
      message: "Success!",
      description: "Item added successfully.",
      icon: <SmileOutlined style={{ color: "#25f525" }} />,
      placement: "bottomRight",
    });
  };
  const handleAddToCart = useCallback(
    (e) => {
      dispatch(addToCart(selectedItem, itemCount));
      handleSetIsModalVisible(false);
      openNotification();
      history.goBack();
    },
    [dispatch, selectedItem, itemCount, handleSetIsModalVisible, history]
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
            amount={selectedItem.amount}
            type={selectedItem.type === "food" ? " per portion" : ""}
          />
          <ItemCountToggler
            itemCount={itemCount}
            handleDecrementCount={handleDecrementCount}
            handleIncrementCount={handleIncrementCount}
          />
        </div>
      </section>
    </Modal>
  );
};

export default ModalComponent;
