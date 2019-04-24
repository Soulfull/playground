import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout.jsx';
import PlatformTools from './components/PlatformTools/PlatformTools.jsx';
import Header from './components/Header/Header.jsx';

class App extends Component {
  render() {
    return (
      <Layout
        header={() => <Header />}
        content="content"
        sidebar={() => <PlatformTools />}
        footer="footer"
      />
    );
  }
}

export default App;
