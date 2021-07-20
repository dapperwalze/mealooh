import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Layout } from "antd";
import { DisplayItems } from "./../../../pages/DisplayItems/index";
import { Cart } from "./../../../pages/Cart/index";
import { OrderHistory } from "./../../../pages/OrderHistory/index";
import { ModalComponent } from "./../../../components/Modal/index";
import styles from "./content.module.scss";

const { Content } = Layout;

const PageContent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <Content className={styles.content}>
      <Switch>
        <Route exact path="/">
          <DisplayItems setIsModalVisible={setIsModalVisible} />
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
            setIsModalVisible={setIsModalVisible}
          />
        </Route>
      )}
    </Content>
  );
};

export default PageContent;
