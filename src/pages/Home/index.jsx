import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "./../../actions/foodItemsActions";
import { foodItemsSelector } from "../../reducers/foodItemsReducer";
import { FoodItemCard } from "./../../components/Cards/FoodItemCard";
import { foodList } from "../../mealData/foodList";
import styles from "./home.module.scss";

export const Home = ({ handleSetIsModalVisible }) => {
  let location = useLocation();
  const dispatch = useDispatch();
  const { isLoading, foodItems, hasErrors } = useSelector(foodItemsSelector);

  useEffect(() => {
    dispatch(fetchFoodItems());
  }, [dispatch]);

  const popularFoodItems = foodList.map((item) => (
    <Link
      key={item.id}
      to={{
        pathname: `/meals/item-details/${item.id}`,
        state: { background: location },
      }}
    >
      <FoodItemCard
        alt={item.name}
        url={item.url}
        name={item.name}
        amount={item.amount}
        onClick={handleSetIsModalVisible}
      />
    </Link>
  ));

  const renderAllFoodItems = foodItems.map((item) => (
    <Link
      key={item.id}
      to={{
        pathname: `/meals/item-details/${item.id}`,
        state: { background: location },
      }}
    >
      <FoodItemCard
        alt={item.name}
        url={item.url}
        name={item.name}
        amount={item.amount}
        onClick={handleSetIsModalVisible}
      />
    </Link>
  ));

  if (isLoading) return <p>Loading meals...</p>;
  if (hasErrors) return <p>Unable to display meals.</p>;
  return (
    <>
      <section className={styles.contentSection}>
        <h2 className={styles.sectionHeader}>Most Popular</h2>
        <div className={styles.foodItemsContainer}>{popularFoodItems}</div>
      </section>

      <section className={styles.contentSection}>
        <h2 className={styles.sectionHeader}>All</h2>
        <div className={styles.foodItemsContainer}>{renderAllFoodItems}</div>
      </section>
    </>
  );
};
