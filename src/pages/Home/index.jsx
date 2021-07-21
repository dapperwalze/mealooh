import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFoodItems } from "./../../actions/foodItemsActions";
import { Card } from "../../components/Card/index";
import { foodList } from "../../mealData/foodList";
import styles from "./displayItems.module.scss";

const Home = ({
  setIsModalVisible,
  dispatch,
  isLoading,
  foodItems,
  hasErrors,
}) => {
  let location = useLocation();

  useEffect(() => {
    dispatch(fetchFoodItems());
  }, [dispatch]);

  const renderAllFoodItems = () => {
    if (isLoading) return <p>Loading meals...</p>;
    if (hasErrors) return <p>Unable to display meals.</p>;
    return foodItems.map((item) => (
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
  };
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

  return (
    <>
      <section className={styles.contentSection}>
        <h2 className={styles.sectionHeader}>Most Popular</h2>
        <div className={styles.foodItemsContainer}>{popularFoodItems}</div>
      </section>

      <section className={styles.contentSection}>
        <h2 className={styles.sectionHeader}>All</h2>
        <div className={styles.foodItemsContainer}>{renderAllFoodItems()}</div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.foodItems.isLoading,
  foodItems: state.foodItems.foodItems,
  hasErrors: state.foodItems.hasErrors,
});

export default connect(mapStateToProps)(Home);
