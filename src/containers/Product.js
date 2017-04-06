import {connect} from 'react-redux';
import ProductComponent from '../components/Product.jsx';
import {addProduct} from '../actions/cart';

export const Product = connect(
  function mapStateToProps (state) {
    return {
      cartData: state
    };
  },
  function mapDispatchToProps (dispatch) {
    return {
      addProductToCart: product => dispatch(addProduct(product))
    }
  }
)(ProductComponent);
