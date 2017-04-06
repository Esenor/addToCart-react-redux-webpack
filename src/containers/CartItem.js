import {connect} from 'react-redux';
import CartItemComponent from '../components/CartItem.jsx';
import {updateQty, removeProduct} from '../actions/cart';

export const CartItem = connect(
  function mapStateToProps (state) {
    return {
      cartData: state
    };
  },
  function mapDispatchToProps (dispatch) {
    return {
      changeQty: (productId, qty) => dispatch(updateQty(productId, qty)),
      remove: productId => dispatch(removeProduct(productId))
    };
  }
)(CartItemComponent);
