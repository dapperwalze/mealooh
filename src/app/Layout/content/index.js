import React from "react";
import { Link } from "react-router-dom";
import { Layout, Card } from "antd";
import { foodList } from "./../../../mealData/foodList";
import { drinkList } from "./../../../mealData/drinkList";
import styles from "./content.module.scss";

const { Content } = Layout;

const MealContent = () => {
  const foodItems = foodList.map((item) => (
    <Link to="#">
      <Card hoverable className={styles.foodItemCard} style={{ width: 180 }}>
        <div className={styles.itemImageContainer}>
          <img className={styles.itemImage} alt={item.name} src={item.url} />
        </div>
        <div className={styles.itemDetails}>
          <span className={styles.itemName}>{item.name}</span>
          <span className={styles.itemPrice}>NGN {item.amount}.00</span>
        </div>
      </Card>
    </Link>
  ));

  const drinks = drinkList.map((drink) => (
    <Link to="#">
      <Card hoverable className={styles.foodItemCard} style={{ width: 180 }}>
        <div className={styles.itemImageContainer}>
          <img className={styles.itemImage} alt={drink.name} src={drink.url} />
        </div>
        <div className={styles.itemDetails}>
          <span className={styles.itemName}>{drink.name}</span>
          <span className={styles.itemPrice}>NGN {drink.amount}.00</span>
        </div>
      </Card>
    </Link>
  ));

  return (
    <>
      <Content className={styles.content}>
        <section className={styles.popularMealsSection}>
          <h2 className={styles.sectionHeader}>Most Popular</h2>
          <div className={styles.foodItemsContainer}>{foodItems}</div>
        </section>

        <section className={styles.allMealsSection}>
          <h2 className={styles.sectionHeader}>All</h2>
          <div className={styles.foodItemsContainer}>
            {foodItems} {drinks}
          </div>
        </section>
      </Content>
    </>
  );
};

export default MealContent;
