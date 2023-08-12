import classes from "./Header.module.css";
import { Fragment } from "react";
import meal from "../../assests/meal.jpg";
import HeaderButton from "./HeaderButton";
// import mealimage from "../../assests.";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div>ReactMeals</div>
        <HeaderButton onShowCart={props.onCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meal} alt="a tabel of content" />
      </div>
    </Fragment>
  );
};

export default Header;
