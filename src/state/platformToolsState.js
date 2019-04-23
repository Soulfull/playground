import { observable, computed } from "mobx";

export const platformToolsState = [
  {
    id: 'profile',
    component: 'Profile Component',
    icon: 'Profile icon',
    title: 'Profile',
  }
];

class PlatformToolsStore {
  items = observable([
    {
      id: 'profile',
      component: 'Profile Component',
      icon: 'Profile icon',
      title: 'Profile',
      selected: true,
    },
    {
      id: 'market place',
      component: 'Market Place Component',
      icon: 'MP icon',
      title: 'Market Place',
      selected: false,
    }
  ]);

  selectItem(id) {
    debugger;
    this.selected = this.items.find(item => item.id === id);
  }

  selected = observable(this.items.find(item => item.selected));
}

export const platformToolsStore = new PlatformToolsStore();