import { UserType } from '../model/userType';

const { globalState } = window as any;

export default class Global {
  // static get CurrentLanguage(): string {
  //   return globalState.currentLanguage;
  // }

  // static set CurrentLanguage(selectedLanguage: string) {
  //   globalState.currentLanguage = selectedLanguage;
  // }

  static get LoginStatus(): boolean {
    return globalState.LoginStatus;
  }

  static set LoginStatus(value: boolean) {
    globalState.LoginStatus = value;
  }

  static get UserType(): UserType {
    return globalState.UserType;
  }

  static set UserType(value: UserType) {
    globalState.UserType = value;
  }
}
