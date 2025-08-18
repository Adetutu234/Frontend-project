import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Button from "../components/Button";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="border p-2 my-2 flex justify-between">
            <div>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <Button text={"Remove"} className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => removeFromCart(item.id)}/>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
