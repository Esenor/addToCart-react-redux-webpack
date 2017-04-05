export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_QTY = 'UPDATE_QTY';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

/**
 * [addProduct description]
 * @param {[type]} product [description]
 */
export function addProduct (product) {
  return {
    type: ADD_PRODUCT,
    payload: {
      productId: product.productId,
      productName: product.productName,
      unitPrice: product.unitPrice,
      qty: 1
    }
  }
}

/**
 * [updateQty description]
 * @param  {[type]} productId [description]
 * @param  {[type]} qty       [description]
 * @return {[type]}           [description]
 */
export function updateQty (productId, qty) {
  return {
    type: UPDATE_QTY,
    payload: {
      productId: productId,
      qty: qty
    }
  }
}

/**
 * [removeProduct description]
 * @param  {[type]} productId [description]
 * @return {[type]}           [description]
 */
export function removeProduct (productId) {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      productId: productId
    }
  }
}
