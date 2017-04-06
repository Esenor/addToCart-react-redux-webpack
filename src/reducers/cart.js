/**
 * [addProductToCart description]
 * @param {[type]} state  [description]
 * @param {[type]} action [description]
 */
export function addProductToCart (state, action) {
  if (!productAlreadyInCart(action.payload.productId, state.products)) {
    state.products.push(action.payload)
  } else {
    state.products = state.products.map(function (product) {
      if (product.productId === action.payload.productId) {
        product.qty = product.qty + 1
      }
      return product
    })
  }
  state.totalPrice = updateTotalPrice(state.products)
  return state
}

/**
 * [updateProductQty description]
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
export function updateProductQty (state, action) {
  if (productAlreadyInCart(action.payload.productId, state.products)) {
    state.products = state.products.map(function (product) {
      if (product.productId === action.payload.productId) {
        product.qty = action.payload.qty
      }
      return product
    })
    state.totalPrice = updateTotalPrice(state.products)
  }
  return state
}

/**
 * [removeProductToCart description]
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
export function removeProductToCart (state, action) {
  state.products = state.products.filter(function (product) {
    return product.productId !== action.payload.productId
  })
  state.totalPrice = updateTotalPrice(state.products)
  return state
}

/**
 * [productAlreadyInCart description]
 * @param  {[type]} productId [description]
 * @param  {[type]} products  [description]
 * @return {[type]}           [description]
 */
function productAlreadyInCart (productId, products) {
  return products.reduce(function (result, product) {
    return product.productId === productId || result
  }, false)
}

/**
 * [updateTotalPrice description]
 * @param  {[type]} products [description]
 * @return {[type]}          [description]
 */
function updateTotalPrice (products) {
  return products.reduce(function (total, product) {
    return total + (product.unitPrice * product.qty)
  }, 0)
}
