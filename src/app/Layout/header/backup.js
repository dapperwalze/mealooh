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

                <div className={styles.leftside}>
                    <div className={styles.leftside1}>
                        <Logo/>
                    </div>
                    <div className={styles.leftside2}>
                        <Search placeholder="input search text" onSearch={onSearch} enterButton />
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
