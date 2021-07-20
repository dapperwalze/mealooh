import SearchIcon from "./search-icon.png";
import styles from "./searchBar.module.scss";

export const SearchBar = () => {
   const handleChange = (e) => {
    //const keyword = e.target.value;

    //setSearchValue(keyword);
  };

  
  return (
    <div className={styles.searchBox}>
      <form className={styles.form}>
        <input
          type="search"
          className={ styles.searchField }
          placeholder="Find food and drinks"
          onChange={(e) => handleChange(e)}
          //value={searchValue}
        />

        <img className={styles.searchIcon} alt="search icon" src={SearchIcon} />
      </form>
    </div>
  );
};


