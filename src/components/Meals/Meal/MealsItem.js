import { useState } from "react";
import classes from "./MealItem.module.css";

const MealsItem = (props) => {
  const price = `${props.price.toFixed(2)}`;
  const [inputVal, setInputVal] = useState();

  const onGetInputVal = (event) => {
    setInputVal(event.target.value);
  };

  const addCartHandler = () => {
    if (inputVal && parseInt(inputVal) !== 0) {
      const obj = {
        id: props.id,
        name: props.name,
        description: props.description,
        price: price,
        value: parseInt(inputVal),
      };
      props.onAdd(obj);
    }
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <div>
          <span>Amount</span>
          <input
            type="number"
            min="0"
            max="5"
            value={inputVal}
            onChange={onGetInputVal}
          />
        </div>
        <div>
          <button onClick={addCartHandler}>Add</button>
        </div>
      </div>
    </li>
  );
};

export default MealsItem;
