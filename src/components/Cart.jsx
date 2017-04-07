import React from 'react'
import {CartItem} from '../containers/CartItem'
import common from '../common'

/**
 * React Cart components
 * This component is the application wrapper
 */
class Cart extends React.Component {
  /**
   * Cart render method
   * @return {object}
   */
  render () {
    let qty = this.props.cartData.products.length
    let cartList = this.props.cartData.products.map(function (product) {
      return (<CartItem key={product.productId} product={product} />)
    })
    return (
      <section>
        <header>Cart: {qty} {common.wordHumanized(qty, 'product', 'products')}</header>
        <div>{cartList}</div>
        <strong className="mapadding">Total Price: {this.props.cartData.totalPrice} €</strong>
      </section>
    )
  }
}

/**
 * Export Cart container
 * @type {Cart}
 */
module.exports = Cart
