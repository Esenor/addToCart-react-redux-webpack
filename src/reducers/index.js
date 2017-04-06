import * as cartInterfaces from '../interfaces/cart';
import * as cartReducers from './cart';

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
    case cartInterfaces.ADD_PRODUCT:
      return immutableState(state, cartReducers.addProductToCart(state, action));
    case cartInterfaces.UPDATE_QTY:
      return immutableState(state, cartReducers.updateProductQty(state, action));
    case cartInterfaces.REMOVE_PRODUCT:
      return immutableState(state, cartReducers.removeProductToCart(state, action));
    default:
      return state;
  }
}
