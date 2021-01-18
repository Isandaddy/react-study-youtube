import React, { useRef } from "react";
import styles from "./searchBar.module.css";

const SearchBar = ({onSearch}) => {
const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    console.log('click submit');
    handleSearch();
  }

  const onKeyPress = (event) => {
    console.log('press key');
    if(event.key === "Enter"){
      handleSearch();
    }
  }

  return (
    <header>
      <div className={styles.searchBarLogo}>
        <img
          src="../images/logo.png"
          alt="logo"
        />
      </div>
      <span className={styles.searchBarTitle}>Youtube</span>
      <form action="#" className={styles.searchBarForm}>
        <input ref={inputRef} type="search" className={styles.searchBarInput} placeholder="Searchs.." onKeyPress={onKeyPress}/>
        <button className={styles.searchButton} type="submit" onClick={onClick}>
          <img
            src="../images/search.png"
            alt="search"
            className={styles.searchBarSearchIcon}
          />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
