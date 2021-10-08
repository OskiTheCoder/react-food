import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImg from "../../assets/vegan-sushi.jpg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Vegan Sushi</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Vegan sushi" />
      </div>
    </>
  );
};

export default Header;
