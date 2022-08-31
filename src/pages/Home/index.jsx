import React, { useEffect, useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "./../../actions/foodItemsActions";
import { foodItemsSelector } from "../../reducers/foodItemsReducer";
import { FoodItemCard } from "./../../components/Cards/FoodItemCard";
// import { foodList } from "../../mealData/foodList";
import { Row, Col, Pagination } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { handlePagination, handleSearchProducts } from "./../../utils/helpers";
import { Context } from "./../../_shared";
import styles from "./home.module.scss";

export const Home = ({ handleSetIsModalVisible }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, foodItems, hasErrors } = useSelector(foodItemsSelector);
  const { keyword } = useContext(Context);
  let location = useLocation();
  const dispatch = useDispatch();
  const PAGE_SIZE = 12;
  const pagesCount = Math.ceil(foodItems.length / PAGE_SIZE);

  useEffect(() => {
    dispatch(fetchFoodItems());
  }, [dispatch]);

  const itemRender = (_, type, originalElement) => {
    if (currentPage === 1 && type === "prev") {
      return "";
    }
    if (currentPage === pagesCount && type === "next") {
      return "";
    }
    return originalElement;
  };

  const searchResults = handleSearchProducts(foodItems, keyword);

  const currentPageProducts = handlePagination(
    searchResults,
    currentPage,
    PAGE_SIZE
  );

  const handlePageNavigation = (page) => {
    setCurrentPage(page);
  };

  const popularFoodItems = searchResults.slice(0, 12).map((item) => (
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

  const renderAllFoodItems = currentPageProducts.map((item) => (
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
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  if (isLoading) return antIcon;
  if (hasErrors) return <p>Unable to display meals.</p>;
  return (
    <>
      <section className={styles.contentSection}>
        <h2 className={styles.sectionHeader}>Most Popular Meals</h2>
        <div className={styles.foodItemsContainer}>
          <Row gutter={[50, 50]}>
            {popularFoodItems?.length < 1 && (
              <p className={styles.emptyState}>
                no item matches your search...
              </p>
            )}
            {popularFoodItems?.map((item, index) => (
              <Col
                key={index}
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 6 }}
              >
                {item}
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className={styles.contentSection}>
        <h2 className={styles.sectionHeader}>All Meals</h2>
        <div className={styles.foodItemsContainer}>
          <Row gutter={[50, 50]}>
            {popularFoodItems?.length < 1 && (
              <p className={styles.emptyState}>
                no item matches your search...
              </p>
            )}
            {renderAllFoodItems?.map((item, index) => (
              <Col
                key={index}
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 6 }}
              >
                {item}
              </Col>
            ))}
          </Row>
        </div>
        <div className={styles.allCategoryFooter}>
          {searchResults.length >= 1 && (
            <Pagination
              current={currentPage}
              onChange={handlePageNavigation}
              pageSize={PAGE_SIZE}
              total={searchResults.length}
              itemRender={itemRender}
              showTitle={false}
            />
          )}
        </div>
      </section>
    </>
  );
};
