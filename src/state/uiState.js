import { observable } from 'mobx';

class UiState {
  @observable
  isSidebarOpen = false;

  toggleSidebar = () => {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}

export const uiState = new UiState();