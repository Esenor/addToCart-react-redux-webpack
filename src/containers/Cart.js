import {connect} from 'react-redux';
import CartComponent from '../components/Cart.jsx';

export const Cart = connect(
  function mapStateToProps (state) {
    return {
      cartData: state
    };
  }
)(CartComponent);
