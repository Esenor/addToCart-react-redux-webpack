import React from 'react';
import ProductList from '../components/ProductList.jsx';
import {Cart} from '../containers/Cart';

/**
 * React SandBox components
 * This component is the application wrapper
 */
class SandBox extends React.Component {
  
  /**
   * SandBox constructor
   * @param  {object} props
   */
  constructor (props) {
    super(props);
  }

  
  /**
   * SandBox render method
   * @return {object}
   */
  render () {
    let humanizedProps = JSON.stringify(this.props.cartData, null, 2);
    return (
      <div id="reactApp">
        <ProductList />
        <Cart />
        <pre>{humanizedProps}</pre>
      </div>
    );
  }
}

/**
 * Export SandBox container
 * @type {SandBox}
 */
module.exports = SandBox;
