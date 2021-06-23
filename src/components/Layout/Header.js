import React from "react";
import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "../Layout/HeaderCartButton";

const Header = (props) => {
  console.log(styles);
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Omni Hotels</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt=""></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
