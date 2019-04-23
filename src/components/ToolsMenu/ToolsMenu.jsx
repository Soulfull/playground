import React from 'react';

const ToolsMenu = ({ store}) => {
  return (
    <ul className="tools-menu">
      {
        store.items.map(item => {
          return (
            <li className="tools-menu__item" key={item.id}>
            <button onClick={() => store.selectItem(item.id)}>{item.icon}</button>
          </li>
          )
        }
        )
      }
    </ul>
  );
}

export default ToolsMenu;
