import React from 'react'

/**
 * React Product components
 * This component is the application wrapper
 */
class Product extends React.Component {
  /**
   * Product constructor
   * @param  {object} props
   */
  constructor (props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart () {
    this.props.addProductToCart(this.props.product)
  }

  /**
   * Product render method
   * @return {object}
   */
  render () {
    return (
      <article>
        <section>
          <img src={this.props.product.picture} />
        </section>
        <section>
          <strong>{this.props.product.productName}</strong>
          <div>
            <small>{this.props.product.productId}</small>
          </div>
          <div>
            <i>{this.props.product.unitPrice} €/µ</i>
          </div>
        </section>
        <section>
          <button onClick={this.addToCart}>Add to cart</button>
        </section>
      </article>
    )
  }
}

/**
 * Export Product container
 * @type {Product}
 */
module.exports = Product
