import Card from "../UI/Card";
import MealsItem from "./Meal/MealsItem";
import classes from "./AvailableMeals.module.css";
import { useState } from "react";
import Cart from "../Cart/Cart";
const AvailableMeals = (props) => {
  // const [cartItems, setCartItems] = useState([]);
  // const addTOCart = (obj) => {
  //   // console.log(obj);
  //   setCartItems((preItems) => {
  //     return [...preItems, obj];
  //   });
  // };
  // console.log(cartItems);
  const DUMMY_MEALS = [
    {
      id: 1,
      name: "chapathi",
      description: "it is made up of aashrvaadhi pindi",
      price: 10,
    },
    {
      id: 2,
      name: "biryani",
      description: "biryani have rich and varity masalas",
      price: 100,
    },
    {
      id: 3,
      name: "panipuri",
      description: "pani puri made up of maida",
      price: 100,
    },
    {
      id: 4,
      name: "samosa",
      description: "samosa made up of sweetcorn",
      price: 100,
    },
  ];

  const meals = DUMMY_MEALS.map((meal) => (
    <MealsItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      onAdd={props.onAdd}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
