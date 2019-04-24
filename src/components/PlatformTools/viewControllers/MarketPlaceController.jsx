import React, { Component, Fragment } from 'react';
import Dashboard from '../../MarketPlace/Dashboard.jsx';

class MarketPlaceController extends Component {
  renderCurrentComponent() {
    const { depth, ...rest } = this.props;

    switch (depth) {
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

export default MarketPlaceController;
