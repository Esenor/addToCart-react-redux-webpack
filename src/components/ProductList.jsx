import React from 'react';
import {Product} from '../containers/Product'

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
    var products = [
      {
        productId: 'PRD-14_store-californien',
        productName: 'Store californien',
        unitPrice: 49
      },
      {
        productId: 'PRD-17_kit-de-rnovation-bandes-seules',
        productName: 'Kit de rénovation bandes seules',
        unitPrice: 15
      },
      {
        productId: 'PRD-26_rideau-voilage',
        productName: 'Rideau voilage',
        unitPrice: 25
      }
    ];
    let productList = products.map(function (product) {
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
