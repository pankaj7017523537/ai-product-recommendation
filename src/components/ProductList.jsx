import React from "react";
import "./ProductList.css";


const ProductList = ({ products }) => {
  if (products.length === 0) return <p>No products found</p>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h4>{product.name}</h4>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
