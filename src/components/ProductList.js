import React from 'react';
import ProductItem from './ProductItem';

const ProductList = (props) => {
  return (
    <ul>
      {props.items.length > 0 && props.items.map(
        (prod, index) => <ProductItem  key={`pe-${index}`} name={prod.title}/>
        )}
    </ul>
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