import React from 'react';

/**
 * This component renders its child components
 * [render description]
 * @param  {[type]} ) {               return React.cloneElement(this.props.children, {pair: pair});  }} [description]
 * @return {[type]}   [description]
 */
export default React.createClass({
  render: function() {
    return this.props.children;
  }
});