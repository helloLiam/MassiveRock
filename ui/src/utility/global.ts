const { globalState } = window as any;

export default class Global {
  // static get CurrentLanguage(): string {
  //   return globalState.currentLanguage;
  // }

  // static set CurrentLanguage(selectedLanguage: string) {
  //   globalState.currentLanguage = selectedLanguage;
  // }

  static get LoginStatus(): boolean {
    return globalState.loginStatus;
  }
}
