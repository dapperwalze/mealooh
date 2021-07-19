import React from "react"
//import SearchIcon from "./search-icon.png";
import "antd/dist/antd.css";
import styles from "./searchBar.module.scss";
import {Button, Input} from "antd";

export const SearchBar = () => {

    return (
        <div className={styles.searchBox}>
            <form className={styles.form}>

                    <Input
                        className={styles.inputSearch}
                        type="email"
                        placeholder="Find food and drinks here..."
                        required
                    />
                    <Button
                        className={styles.subscribeButton}
                        type="primary"
                        size="large"
                        block
                    >
                       Search
                    </Button>
            </form>
        </div>
    );
};
