import React, { Component, Fragment } from 'react';
import Dashboard from '../../Profile/Dashboard.jsx';
import Achievements from '../../Profile/Achievements.jsx';

class ProfileController extends Component {
  renderCurrentComponent() {
    const { depth, ...rest } = this.props;

    switch (depth) {
      case 1:
        return <Achievements { ...rest } />;
      default:
        return <Dashboard { ...rest } />;
    }
  }

  render() {
    const { depth } = this.props;

    return (
      <Fragment>
        {this.renderCurrentComponent()}
      </Fragment>
    );
  }
}

export default ProfileController;
