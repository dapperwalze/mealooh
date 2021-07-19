import React from "react";
import { Layout, Input } from "antd";
import { Logo } from "./../../../components/Logo/index";

import styles from "./header.module.scss";
const { Header } = Layout;
const { Search } = Input;

const onSearch = value => console.log(value);
const PageHeader = () => {
  return (
    <>
      <Header className={styles.header} theme={'light'}>

            <div className={styles.headerleft}>

            </div>

              <div className={styles.headerright}>
                       <Search
                           placeholder="input search text"
                           onSearch={onSearch}
                           enterButton />

                       <nav>
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
