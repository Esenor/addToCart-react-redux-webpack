import React from 'react';
import {Product} from '../containers/Product';
import rawProductList from '../../config/productList.json';

/**
 * React ProductList components
 * This component is the application wrapper
 */
class ProductList extends React.Component {
  
  /**
   * ProductList constructor
   * @param  {object} props
   */
  constructor (props) {
    super(props);
  }

  /**
   * ProductList render method
   * @return {object}
   */
  render () {
    let productList = rawProductList.map(function (product) {
      return (
        <Product key={product.productId} product={product}/>
      );
    })
    return (
      <section>
        <header>ProductList</header>
        <div>{productList}</div>
      </section>
    );
  }
}

/**
 * Export ProductList container
 * @type {ProductList}
 */
module.exports = ProductList;
