import React from 'react';
import ReactDom from 'react-dom';
import SandBox from './components/SandBox.jsx';
require('./app.scss');
module.exports = {
  renderApp: function (id) {
    ReactDom.render(<SandBox/>, document.getElementById(id));
  }
};
