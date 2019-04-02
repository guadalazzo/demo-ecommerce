import React from 'react';

const ProductItem = (props) => {
  return (
    <li>{props.name || "Prod"}</li>
  )
}
export default ProductItem;