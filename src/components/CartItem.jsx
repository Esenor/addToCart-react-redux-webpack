import React from 'react';

/**
 * React CartItem components
 * This component is the application wrapper
 */
class CartItem extends React.Component {
  
  /**
   * CartItem constructor
   * @param  {object} props
   */
  constructor (props) {
    super(props);
    this.qtyChanged = this.qtyChanged.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  removeProduct () {
    this.props.remove(this.props.product.productId);
  }
  
  qtyChanged (event) {
    var regexNumber = /^\d*[1-9]\d*$/;
    if (!regexNumber.test(event.target.value)) {
      event.target.value = 1;
    }
    var newQty = event.target.value;
    this.props.changeQty(this.props.product.productId, parseInt(newQty));
  }

  /**
   * CartItem render method
   * @return {object}
   */
  render () {
    function itemHumanized (qty) {
      return (qty > 1) ? 'items' : 'item';
    }
    return (
      <article>
        <section>
          <strong>{this.props.product.productName}</strong>
          <div>
            <small>{this.props.product.productId}</small>
          </div>
          <div>
            <i>{this.props.product.unitPrice} €/µ</i>
          </div>
          <div>
            <input type="number" value={this.props.product.qty} onChange={this.qtyChanged}/>
            <i>{itemHumanized(this.props.product.qty)}</i>
          </div>
          <div>
            <button onClick={this.removeProduct}>remove product</button>
          </div>
        </section>
      </article>
    );
  }
}

/**
 * Export CartItem container
 * @type {CartItem}
 */
module.exports = CartItem;
