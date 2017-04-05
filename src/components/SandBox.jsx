import React from 'react';

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
    return (
      <div id="reactApp">
        cart redux
      </div>
    );
  }
}

/**
 * Export SandBox container
 * @type {SandBox}
 */
module.exports = SandBox;
