import * as cartInterfaces from '../interfaces/cart';
/**
 * [addProduct description]
 * @param {[type]} product [description]
 */
 export function addProduct (product) {
  return {
    type: cartInterfaces.ADD_PRODUCT,
    payload: {
      productId: product.productId,
      productName: product.productName,
      unitPrice: product.unitPrice,
      picture: product.picture,
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
    type: cartInterfaces.UPDATE_QTY,
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
    type: cartInterfaces.REMOVE_PRODUCT,
    payload: {
      productId: productId
    }
  }
}
