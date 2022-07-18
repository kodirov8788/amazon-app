import React from 'react'
import "./Products.css"
import { ProductData } from "../../static/static__data"


const Products = () => {
    console.log(ProductData);
    return (
        <div className='products'>
            {
                ProductData.map(product => (
                    <div className="products__item">
                        <h1>{product.ProductName}</h1>
                        <img style={{ width: "200px" }} src={product.ProductImage.type} alt="" />

                    </div>
                ))
            }
        </div>
    )
}

export default Products