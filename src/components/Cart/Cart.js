import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const items = (
    <ul>
      {props.items.map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );

  let totalAmount = 0;
  for (let item of props.items) {
    totalAmount = totalAmount + parseInt(item.value) * parseInt(item.price);
  }

  return (
    <Modal onClick={props.onHideCart}>
      <div>
        {items}
        <div className={classes.total}>
          <span>Total Item</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]}>Order</button>
          <button className={classes.button} onClick={props.onHideCart}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
