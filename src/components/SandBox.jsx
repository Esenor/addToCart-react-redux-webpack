import React from 'react'
import ProductList from '../components/ProductList.jsx'
import {Cart} from '../containers/Cart'

/**
 * React SandBox components
 * This component is the application wrapper
 */
class SandBox extends React.Component {
  /**
   * SandBox render method
   * @return {object}
   */
  render () {
    return (
      <div id="reactApp">
        <div className="container">
          <ProductList />
        </div>
        <div className="container">
          <Cart />
        </div>
      </div>
    )
  }
}

/**
 * Export SandBox container
 * @type {SandBox}
 */
module.exports = SandBox
