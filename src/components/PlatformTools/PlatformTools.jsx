import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { observer } from 'mobx-react';

// inject data (pseudo connector)
import { platformToolsStore } from '../../state/platformToolsState.js';
import ToolsMenu from '../ToolsMenu/ToolsMenu.jsx';


const PortedMenu = (props) => (
  createPortal(<ToolsMenu {...props} />, document.getElementById('sidebar-menu-container'))
)

class PlatformTools extends Component {
  state = {
    renderMenu: false,
  }

  componentDidMount() {
    this.setState({
      renderMenu: true,
    })
  }
  
  render() {
    return (
      <div className="platform-tools">
        {this.state.renderMenu ? <PortedMenu store={platformToolsStore} /> : null}
        <div className="platform-tools__content">{platformToolsStore.selected.component}</div>
      </div>
    );
  }
}

export default observer(PlatformTools);
