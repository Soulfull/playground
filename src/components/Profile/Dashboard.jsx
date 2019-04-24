import React, { Component } from 'react';

class Dashboard extends Component {
  goToAchievements = () => {
    this.props.goNext('Achievements');
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
       <button onClick={this.goToAchievements}>Go deeper</button>
      </div>
    );
  }
}

export default Dashboard;
