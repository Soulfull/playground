import { observable, reaction, action } from 'mobx';
import ProfileController from '../components/PlatformTools/viewControllers/ProfileController.jsx';
import MarketPlaceController from '../components/PlatformTools/viewControllers/MarketPlaceController.jsx';

class PlatformToolsStore {
  @observable
  items = [
    {
      id: 'profile',
      controller: ProfileController,
      icon: 'Profile icon',
      title: 'Profile',
      selected: true,
    },
    {
      id: 'market place',
      controller: MarketPlaceController,
      icon: 'MP icon',
      title: 'Market Place',
      selected: false,
    }
  ];
  constructor() {
    reaction(() => [this.depth, this.titles], (data) => console.log(data));
  }

  @observable
  depth = 0;
  @observable
  titles = [];

  selectItem = (id) => {
    this.selected = this.items.find(item => item.id === id);
  }

  @action
  goNext = (title) => {
    this.depth += 1;
    this.titles.push(title);
  }

  goPrev = () => {
    this.depth =  this.depth && this.depth - 1;
    this.titles.pop();
  }

  @observable
  selected = this.items.find(item => item.selected);
}

export const platformToolsStore = new PlatformToolsStore();


// const stateGraph = {
//   profile: {
//     component: 'Component1',
//     title: 'Title1',
//     next: {
//       component: 'Component2',
//       title: 'Title2',
//     }
//   }
// }