import React, { Component } from 'react';
import { observer } from 'mobx-react';

// inject data (pseudo connector)
import { platformToolsStore } from '../../state/platformToolsState.js';
import ToolsMenu from '../ToolsMenu/ToolsMenu.jsx';

@observer
class PlatformTools extends Component {
  render() {
    const ViewController = observer(platformToolsStore.selected.controller);

    return (
      <div className="platform-tools">
        <div className="platform-tools__content">
        <ViewController
          goNext={platformToolsStore.goNext}
          goPrev={platformToolsStore.goPrev}
          depth={platformToolsStore.depth}
        />
        </div>
      </div>
    );
  }
}

export default PlatformTools;
