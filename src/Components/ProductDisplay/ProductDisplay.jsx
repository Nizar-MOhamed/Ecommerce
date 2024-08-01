import React, { useContext } from 'react'
import'./ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productDisplay'>
        <div className="productDisplayLeft">
            <div className="productDisplayImgList">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productDisplayImg">
                <img className='productDisplayMainImage' src={product.image} alt="" />
            </div>
        </div>
        <div className="productDisplayRight">
            <h1>{product.name}</h1>
            <div className="productDisplayRightStar">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>{123}</p>
            </div>
            <div className="productDisplayRightPrices">
                <div className="productDisplayRightOld">${product.old_price}</div>
                <div className="productDisplayRightNew">${product.new_price}</div>
            </div>
            <div className="productDisplayRightDescription">
                A lightWeight , usually knitted , pullover shirt , round neckline and short sleeves 
            </div>
            <div className="productDisplayRightSize">
                <h1>Select Size</h1>
                <div className="ProductDisplayRightSizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>Add to cart</button>
            <p className='productDisplayRightCategory'><span>Category :</span>Women , T-shirt, Crop Top</p>
            <p className='productDisplayRightCategory'><span>Tags :</span>Modern , Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay