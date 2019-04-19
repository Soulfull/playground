class AppService {
  appState = {
    user: 'misha',
    id: 123456,
  }

  getUser() {
    return this.appState.user;
  }
}

const appService = new AppService();
export default appService;