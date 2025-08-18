import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

  // add product to cart
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
    } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // remove product from cart
  const removeFromCart = (id) => {
    setCartItems((prevCart) =>
      prevCart.filter(item => item.id !== id)
);
};

// total quantity
const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

// import React,{createContext,useState} from 'react'

// const CartContext = createContext()

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // add product to cart
//   const addTocart = (product) => {
//     setCartItems((prevCart) => {
//       const existingItem = prevCart.find(item => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   // remove product from cart
//   const removeFromCart = (id) => {
//     setCartItems((prevCart) =>
//       prevCart.filter(item => item.id !== id)
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addTocart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export { CartContext, CartProvider };