import React from 'react';
import ProductItem from './ProductItem';

const ProductList = (props) => {
  return (
    <div className="item-list">

      {props.items && props.items.length > 0 && props.items.map(
        (prod, index) => <ProductItem  
          key={`pe-${index}`} 
          name={prod.title} 
          image={prod.thumbnail}
          price={prod.price}
          url={prod.permalink}
          />
        )}
    </div>
  )
}
// class ProductList extends React.Component {
//   render() {
//     return (
//       <div>
//         <input type="text"/> <button>ok</button>
//       </div>
//     )
//   }
// }
export default ProductList;