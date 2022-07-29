import React from "react";
import "./Products.css";
import { ProductData } from "../../static/static__data";
import { Link } from "react-router-dom";

<<<<<<< HEAD
const Products = () => {
  // console.log(ProductData);
  return (
    <div className="products">
      {ProductData.map((product) => (
        <div className="products__item" key={product.id}>
          <img
            style={{ width: "290px", height: "256" }}
            src={product.ProductImage.type}
            alt=""
          />
          <Link state={product.id} to={`/product/${product.id}`}>
            <h4>{product.ProductName}</h4>
          </Link>
=======
const Products = (props) => {

    console.log(props.item);
    return (
        <div className="products">
            {ProductData.map((product) => (
                <div className="products__item" key={product.id}>
                    <img
                        style={{ width: "290px", height: "256" }}
                        src={product.ProductImage.type}
                        alt=""
                    />
                    <Link state={product.id} to={`/product/${product.id}`}>
                        <h4>{product.ProductName}</h4>
                    </Link>
                </div>
            ))}
>>>>>>> e2e2ab67ab677bb4fa62b30b6c1ba462fe1cbaa6
        </div>
    );
};

export default Products;
