import React from 'react';

// styles
import './Layout.css';

const Layout = ({ header, content, sidebar, footer }) => {
  return (
    <div className="layout">
      <div className="layout__header">{ header() }</div>
      <div className="layout__body">
        <div className="layout__content">{ content }</div>
        <aside className="layout__sidebar sidebar">
         {sidebar()}
        </aside>
      </div>
      <footer className="layout__footer">{ footer }</footer>
    </div>
  );
}

export default Layout;
