import React, { Component } from 'react';

class Header extends Component {
  render() {
    console.log('render header');
    return (
      <div className="header">
        <h2>Logo</h2>
        <div id="sidebar-menu-container" />
      </div>
    );
  }
}

export default Header;
