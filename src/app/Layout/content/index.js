import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import {useState} from "react"
import { Layout } from "antd";
import { foodList } from "./../../../mealData/foodList";
import { drinkList } from "./../../../mealData/drinkList";
import styles from "./content.module.scss";
import { Card } from "./../../../components/Card/index";
import ModalComponent from "./../../../components/Modal/Modal";
const { Content } = Layout;


const PageContent = () => {
    const [isModal, setIsModal]=useState(false);
  const foodItems = foodList.map((item) => (
    <Link key={item.id} to="#">
      <Card
        alt={item.name}
        url={item.url}
        name={item.name}
        amount={item.amount}
      />
    </Link>
  ));

  const drinks = drinkList.map((item) => (
    <Link to="#">
      <Card
        alt={item.name}
        url={item.url}
        name={item.name}
        amount={item.amount}
      />
    </Link>
  ));

  return (
    <>
      <Content className={styles.content}>
        <section className={styles.popularMealsSection}>
          <h2 className={styles.sectionHeader}>Most Popular</h2>
          <div className={styles.foodItemsContainer} onClick={()=>setIsModal(true)}>{foodItems}</div>
        </section>

        <section className={styles.allMealsSection}>
          <h2 className={styles.sectionHeader}>All</h2>
          <div className={styles.foodItemsContainer}>
            {foodItems} {drinks}
          </div>
        </section>
      </Content>

        <ModalComponent isModal={isModal}/>
    </>
  );
};

export default PageContent;
