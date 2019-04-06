import React from 'react';

const ProductItem = (props) => {
  return (
    <a href={props.url} className="item">
      <figure>
        <img src={props.image} alt="product view" />
      </figure>
      <div className="data">
        <h2>{props.name || "Prod"}</h2>
        <span className="price">
          {`$ ${props.price}`}
        </span>
      </div>
    </a>
  )
}
export default ProductItem;