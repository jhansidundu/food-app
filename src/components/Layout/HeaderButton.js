import CartIcon from "../Cart/CartIcon";
import React from "react";
import classes from "./HeaderButton.module.css";
const HeaderButton = (props) => {
  console.log("HI");
  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.onShowCart}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </React.Fragment>
  );
};
export default HeaderButton;
