import { useHistory, useParams } from "react-router-dom";
import { Modal } from "antd";
import { ItemCountToggler } from "./../ItemCountToggler/index";
import { ItemName } from "./../ItemName/index";
import { ItemPrice } from "./../ItemPrice/index";
import allFoodItems from "../../mealData/index";
import styles from "./modal.module.scss";

export const ModalComponent = ({ isModalVisible, setIsModalVisible }) => {
  let history = useHistory();
  let { id } = useParams();
  let selectedItem = allFoodItems.find((item) => item.id === id);

  console.log(allFoodItems);

  if (!selectedItem) return null;

  const handleCancel = (e) => {
    e.stopPropagation();
    setIsModalVisible(false);
    history.goBack();
  };

  return (
    <Modal
      title="Item Details"
      visible={isModalVisible}
      okText="Add To Cart"
      onOk={handleCancel}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>

        <div className={styles.selectedItemPriceAndQty}>
          <ItemPrice
            price={selectedItem.amount}
            type={selectedItem.type === "food" ? " per portion" : ""}
          />
          <ItemCountToggler />
        </div>
      </section>
    </Modal>
  );
};
