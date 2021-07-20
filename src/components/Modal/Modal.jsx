import { useHistory, useParams } from "react-router-dom";
import { Modal } from "antd";
import allFoodItems from "../../mealData/index";
import styles from "./modal.module.scss";

export const ModalComponent = ({ isModalVisible, setIsModalVisible }) => {
  let history = useHistory();
  let { id } = useParams();
  let image = allFoodItems.find((item) => item.id === id);

  if (!image) return null;

  const handleCancel = (e) => {
    e.stopPropagation();
    setIsModalVisible(false);
    history.goBack();
  };

  return (
    <Modal
      title={image.title}
      visible={isModalVisible}
      onOk={handleCancel}
      onCancel={handleCancel}
      okButtonProps={{ disabled: false }}
      cancelButtonProps={{ disabled: false }}
      centered
    >
      <div className={styles.imageCard}>
        <img className={styles.image} alt={image.name} src={image.url} />
      </div>
    </Modal>
  );
};
