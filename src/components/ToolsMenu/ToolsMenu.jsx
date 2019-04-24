import React, { Fragment } from 'react';
import { observer } from 'mobx-react';

const BackMenu = ({ title, goPrev }) => (
  <div>
    <button onClick={goPrev}>←</button>
    {title}
  </div>
)

const MainMenu = ({ items, selectItem }) => (
  <ul className="tools-menu">
    {
      items.map(item => {
        return (
          <li className="tools-menu__item" key={item.id}>
          <button onClick={() => selectItem(item.id)}>{item.icon}</button>
        </li>
        )
      }
      )
    }
  </ul>
)

const ToolsMenu = ({ store }) => {
  return (
    <Fragment>
       {
        store.titles.length
        ? <BackMenu title={store.titles[store.titles.length - 1]} goPrev={store.goPrev} />
        : <MainMenu items={store.items} selectItem={store.selectItem} />
       }
      </Fragment>
  );
}

export default observer(ToolsMenu);
