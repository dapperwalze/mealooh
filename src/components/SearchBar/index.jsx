import React, { useState, useContext } from "react";
import { Context } from "./../../_shared";
import SearchIcon from "./search-icon.png";
import styles from "./searchBar.module.scss";

export const SearchBar = () => {
  const { keyword, setKeyword } = useContext(Context);
  const [searchValue, setSearchValue] = useState(keyword);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  setKeyword(searchValue);

  return (
    <div className={styles.searchBox}>
      <form className={styles.form}>
        <input
          type="search"
          className={styles.searchField}
          placeholder="Find food and drinks"
          onChange={(e) => handleChange(e)}
          //value={searchValue}
        />

        <img className={styles.searchIcon} alt="search icon" src={SearchIcon} />
      </form>
    </div>
  );
};
