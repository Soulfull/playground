import React, { Component } from 'react';
import ToolsMenu from '../ToolsMenu/ToolsMenu.jsx';
// inject data (pseudo connector)
import { platformToolsStore } from '../../state/platformToolsState.js';

class Header extends Component {
  render() {
    console.log('render header');
    return (
      <div className="header">
        <h2>Logo</h2>
        <div id="sidebar-menu-container"><ToolsMenu store={ platformToolsStore } /></div>
      </div>
    );
  }
}

export default Header;
