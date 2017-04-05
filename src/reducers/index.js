import {ADD_PRODUCT, UPDATE_QTY, REMOVE_PRODUCT} from '../actions';
import {addProduct, updateQty, removeProduct} from '../actions';
import {addProductToCart, updateProductQty, removeProductToCart} from './cart';

const initialState = {
  products: [],
  totalPrice: 0
};

/**
 * [immutableState description]
 * @param  {[type]} state    [description]
 * @param  {[type]} newState [description]
 * @return {[type]}          [description]
 */
function immutableState (state, newState) {
  return Object.assign({}, state, newState)
}

/**
 * [description]
 * @param  {[type]} [state=initialState] [description]
 * @param  {[type]} action               [description]
 * @return {[type]}                      [description]
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return immutableState(state, addProductToCart(state, action));
    case UPDATE_QTY:
      return immutableState(state, updateProductQty(state, action));
    case REMOVE_PRODUCT:
      return immutableState(state, removeProductToCart(state, action));
    default:
      return state;
  }
}
