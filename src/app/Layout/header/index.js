import React from "react";
import { Layout, Input, Space } from "antd";
import { Logo } from "./../../../components/Logo/index";
import {SearchBar} from "./../../../components/SearchBox/SearchBar";

import styles from "./header.module.scss";
const { Header } = Layout;


const PageHeader = () => {
  return (
    <>
      <Header className={styles.header}>

              <div className={styles.leftside}>
                  <div className={styles.leftside1}>
                      <Logo/>
                  </div>
                  <div className={styles.leftside2}>
                    <SearchBar/>
                  </div>
              </div>
              <div className={styles.rightside}>
                         <a href={"#"}>Home</a>
                         <a href={"#"}>Cart</a>
                         <a href={"#"}>Order history</a>
              </div>

      </Header>
    </>
  );
};

export default PageHeader;
