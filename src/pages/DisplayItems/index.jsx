import { useLocation, Link } from "react-router-dom";
import { Card } from "../../components/Card/index";
import { foodList } from "../../mealData/foodList";
import allFoodItems from "../../mealData/index";
import styles from "./displayItems.module.scss";

export const DisplayItems = ({ setIsModalVisible }) => {
  let location = useLocation();

  const popularFoodItems = foodList.map((item) => (
    <Link
      key={item.id}
      to={{
        pathname: `/meals/item-details/${item.id}`,
        state: { background: location },
      }}
    >
      <Card
        alt={item.name}
        url={item.url}
        name={item.name}
        amount={item.amount}
        setIsModalVisible={setIsModalVisible}
      />
    </Link>
  ));

  const allItems = allFoodItems.map((item) => (
    <Link
      key={item.id}
      to={{
        pathname: `/meals/item-details/${item.id}`,
        state: { background: location },
      }}
    >
      <Card
        alt={item.name}
        url={item.url}
        name={item.name}
        amount={item.amount}
        setIsModalVisible={setIsModalVisible}
      />
    </Link>
  ));
  return (
    <>
      <section className={styles.contentSection}>
        <h2 className={styles.sectionHeader}>Most Popular</h2>
        <div className={styles.foodItemsContainer}>{popularFoodItems}</div>
      </section>

      <section className={styles.contentSection}>
        <h2 className={styles.sectionHeader}>All</h2>
        <div className={styles.foodItemsContainer}>{allItems}</div>
      </section>
    </>
  );
};
