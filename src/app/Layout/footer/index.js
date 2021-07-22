import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Button, Input } from "antd";
import { Logo } from "./../../../components/Logo/index";
import styles from "./footer.module.scss";

const { Footer } = Layout;

const PageFooter = () => {
  return (
    <>
      <Footer className={styles.footer} style={{ bottom: "0", width: "100%" }}>
        <section className={styles.footerItem}>
          <Logo />
        </section>
        <section className={styles.footerItem}>
          <nav className={styles.footerNav}>
            <NavLink
              className={styles.footerLink}
              to="/"
              exact
              activeStyle={{
                color: "#25f525",
              }}
            >
              Home
            </NavLink>
            <NavLink
              className={styles.footerLink}
              to="/order-history"
              exact
              activeStyle={{
                color: "#25f525",
              }}
            >
              Order History
            </NavLink>
            <NavLink
              className={styles.footerLink}
              to="/cart"
              exact
              activeStyle={{
                color: "#25f525",
              }}
            >
              Cart
            </NavLink>
          </nav>
        </section>

        <section className={styles.footerItem}>
          <h5 className={styles.subscribeSectionHeader}>
            <span>Be in the know.</span> Get access to amazing offers and
            discounts.
          </h5>
          <form>
            <Input
              className={styles.inputEmail}
              type="email"
              placeholder="Enter your email address"
              required
            />
            <Button
              className={styles.subscribeButton}
              type="primary"
              size="large"
              block
            >
              Submit
            </Button>
          </form>
        </section>
      </Footer>
    </>
  );
};

export default PageFooter;
