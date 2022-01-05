import { dollar } from "../../../utils";
import { useState } from "react";

const Cart = ({ price }) => {
  const [counter, setCounter] = useState(1);
  
  const amount = (val) => {
    switch (val) {
      case "decrement":
        if (counter === 1) {
          return;
        } else {
          return setCounter(counter - 1);
        }
        break;
      case "increment":
        return setCounter(counter + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-display">
        <div className="add">
          <div className="adjuster" onClick={() => amount("decrement")}> - </div>
          <h1>{counter}</h1>
          <div className="adjuster" onClick={() => amount("increment")}> + </div>
        </div>
        <div className="bag">
          <button className="add-bag">
            <p>Throw it in the bag</p>
          </button>
        </div>
        <div className="product-price">
          <h1>{dollar(price)}</h1>
        </div>
      </div>
      <div className="cart-outline"></div>
    </div>
  );
};

export default Cart;
//  onClick={() => amount("increment")}
