import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import {useParams} from 'react-router-dom'
import ShowProduct from "../Components/showProduct/ShowProduct";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import TrendingProduct from "../Components/TrendingProducts/TrendingProduct";


const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <ShowProduct product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <TrendingProduct/>
     </div>
  )
};

export default Product;
