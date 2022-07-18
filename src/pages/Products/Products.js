import React from 'react'
import "./Products.css"
import { ProductData } from "../../static/static__data"
import { Link } from "react-router-dom"


const Products = () => {
    console.log(ProductData);
    return (
        <div className='products'>
            {
                ProductData.map(product => (
                    <div className="products__item" key={product.id}>
                        <Link state={product.id} to={`/product/${product.id}`}><h1>{product.ProductName}</h1></Link>
                        <img style={{ width: "200px" }} src={product.ProductImage.type} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default Products