import React from "react";
import { Link } from "react-router-dom";
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
            <Link className={styles.footerLink} to="/">
              Home
            </Link>
            <Link className={styles.footerLink} to="/order-history">
              Order History
            </Link>
            <Link className={styles.footerLink} to="/cart">
              Cart
            </Link>
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
