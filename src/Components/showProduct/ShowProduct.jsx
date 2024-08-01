import React from "react";
import "./ShowProduct.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const ShowProduct = (props) => {
  const { product } = props;
  return (
    <div className="showProduct">
      HOME <img src={arrow_icon} alt="" />
      SHOP <img src={arrow_icon} alt="" /> {product.category}{" "}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default ShowProduct;
