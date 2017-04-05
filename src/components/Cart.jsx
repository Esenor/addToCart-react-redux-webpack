import React from 'react';
import  {CartItem} from '../containers/CartItem';

/**
 * React Cart components
 * This component is the application wrapper
 */
class Cart extends React.Component {
  
  /**
   * Cart constructor
   * @param  {object} props
   */
  constructor (props) {
    super(props);
  }

  /**
   * Cart render method
   * @return {object}
   */
  render () {
    let cartList = this.props.cartData.products.map(function (product) {
      return (<CartItem key={product.productId} product={product} />);
    });
    return (
      <section>
        <header>Cart</header>
        <strong className="mapadding">Total Price: {this.props.cartData.totalPrice} €</strong>
        <div>{cartList}</div>
      </section>
    );
  }
}

/**
 * Export Cart container
 * @type {Cart}
 */
module.exports = Cart;
