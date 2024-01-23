import React, { useState } from "react";
import { productData } from "../../assets/data/productData";
import "./cartApp.style.css";
import ProductCard from "../../components/productCard/ProductCard";

const CartApp = () => {
  const [productList, setProductList] = useState(productData);
  const [cartList, setCartList] = useState([]);

  const addProductToCart = (product) => {
    const productExists = cartList.find((el) => el.name === product.name);

    if (productExists) {
      const updatedCartList = cartList.map((el) => {
        if (el.name === product.name) {
          return { ...el, count: el.count + 1 };
        } else {
          return el;
        }
      });
      //now we update the cart
      setCartList(updatedCartList);
    } else {
      setCartList([...cartList, { ...product, count: 1 }]);
    }
  };

  return (
    <div>
      <ul style={{ margin: "100px 100px" }}>
        {cartList.length &&
          cartList.map((el, index) => (
            <li key={index}>
              <p>{el.name}</p>
              <p>{el.count}</p>
            </li>
          ))}
      </ul>
      <div className="product-view">
        {productList.map((el, index) => (
          <ProductCard
            key={index}
            product={el}
            addProductToCart={addProductToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default CartApp;
