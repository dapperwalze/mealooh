import React from "react";
import { Layout, Input } from "antd";
import { Logo } from "./../../../components/Logo/index";
import { SearchOutlined } from '@ant-design/icons';
import styles from "./header.module.scss";

const { Header } = Layout;

const PageHeader = () => {
  return (
    <>
      <Header className={styles.header} theme={"light"} >
          <div className={styles.headerleft}>
              <Logo />
          </div>

        <div className={styles.headerright}>
          <div className={styles.search}>
              <Input placeholder={"Find food and drinks"} addonAfter={<SearchOutlined />} />
          </div>

          <nav className={styles.links}>
            <a href={"#"}>Home</a>
            <a href={"#"}>Cart</a>
            <a href={"#"}>Order history</a>
          </nav>
        </div>
      </Header>
    </>
  );
};

export default PageHeader;
