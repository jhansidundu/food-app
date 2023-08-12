import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [displayCart, setDisplayCart] = useState(false);

  const showCart = () => {
    setDisplayCart(true);
  };

  const hideCart = () => {
    setDisplayCart(false);
  };
  const [cartItems, setCartItems] = useState([]);

  const addTOCart = (obj) => {
    const dummyItems = cartItems;
    const item = dummyItems.find((item) => item.id === obj.id);
    // dummyItems.forEach((element) => {
    //   if (element.id === obj.id) {
    //     item = element;
    //   }
    // });
    if (item) {
      item.value = obj.value + item.value;
    }
    console.log(dummyItems);
    if (item) {
      setCartItems(dummyItems);
    }
    if (!item) {
      setCartItems((preItems) => {
        return [...preItems, obj];
      });
    }

    // find the element from cartItem

    // check if element is null or not

    // if element is not null
    // change value and update the array

    // if element is null then simply add
  };

  console.log(cartItems);

  return (
    <Fragment>
      {displayCart && <Cart onHideCart={hideCart} items={cartItems} />}
      <Header onCart={showCart} />
      <main>
        <Meal onAdd={addTOCart} />
      </main>
    </Fragment>
  );
}

export default App;
