import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartSelector } from "./../../../reducers/cartActionsReducer";
import { Layout } from "antd";
import { Logo } from "./../../../components/Logo/index";
import { Badge } from "antd";
import { SearchBar } from "./../../../components/SearchBar/index";
import styles from "./header.module.scss";

const { Header } = Layout;

const PageHeader = () => {
  const { cart } = useSelector(cartSelector);
  return (
    <>
      <Header className={styles.header}>
        <Logo />

        <div className={styles.headerFeatures}>
          <SearchBar />

          <nav className={styles.navLinkGroup}>
            <NavLink
              to="/"
              exact
              activeStyle={{
                color: "#25f525",
              }}
              className={styles.headerNavLink}
            >
              Home
            </NavLink>

            <NavLink
              to="/cart"
              exact
              activeStyle={{ color: "#25f525" }}
              className={styles.headerNavLink}
            >
              Cart
              <Badge className={styles.badge} count={cart.length} showZero />
            </NavLink>

            <NavLink
              to="/order-history"
              exact
              activeStyle={{
                color: "#25f525",
              }}
              className={styles.headerNavLink}
            >
              Order history
            </NavLink>
          </nav>
        </div>
      </Header>
    </>
  );
};

export default PageHeader;
