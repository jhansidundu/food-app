import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealSummary";
import React from "react";

const Meal = (props) => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals onAdd={props.onAdd} />
    </React.Fragment>
  );
};
export default Meal;
