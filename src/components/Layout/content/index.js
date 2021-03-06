import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Layout } from "antd";
import { Home } from "../../../pages/Home/index";
import { Cart } from "./../../../pages/Cart/index";
import { OrderHistory } from "./../../../pages/OrderHistory/index";
import ModalComponent from "../../../components/Modal/Modal";
import styles from "./content.module.scss";

const { Content } = Layout;

const PageContent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <Content className={styles.content}>
      <Switch location={background || location}>
        <Route exact path="/">
          <Home handleSetIsModalVisible={setIsModalVisible} />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/order-history">
          <OrderHistory />
        </Route>
      </Switch>
      {background && (
        <Route path="/meals/item-details/:id">
          <ModalComponent
            isModalVisible={isModalVisible}
            handleSetIsModalVisible={setIsModalVisible}
          />
        </Route>
      )}
    </Content>
  );
};

export default PageContent;
