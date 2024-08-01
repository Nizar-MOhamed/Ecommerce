import React from 'react'
import './TrendingProducts.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'


const TrendingProduct = () => {
  return (
    <div className='relatedProducts'>
        <h1>Trending Products</h1>
        <hr/>
        <div className="relatedProductsItem">
            {data_product.map((item , i) => {
                return <Item key={i} id={item.id} name ={item.name} image ={item.image} new_price={item.new_price} old_price={item.old_price}/>

            })}
        </div>
    </div>
  )
}

export default TrendingProduct