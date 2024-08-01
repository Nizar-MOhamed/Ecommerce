import React from "react";
import { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, CartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItemsFormatMain">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (CartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartItemsFormat cartItemsFormatMain">
                <img src={e.image} alt="" className="cartIconProductIcon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItemsQuantity">{CartItems[e.id]}</button>
                <p>${e.new_price * CartItems[e.id]}</p>
                <img
                  className="cartItemsRemoveIcon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItemsDown">
        <div className="cartItemsTotal">
          <h1>Cart Total</h1>
          <div>
            <div className="cartItemsTotalItem">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItemsTotalItem">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItemsTotalItem">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItemsPromoCode">
          <p>If you have a promo code , Enter it here</p>
          <div className="cartItemPromoBox">
            <input type="text " placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
