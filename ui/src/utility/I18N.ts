/* eslint-disable global-require */
import Global from './global';

const en: any = { ...require('../assets/locale/en-us.json') };
const zh: any = { ...require('../assets/locale/zh-cn.json') };

const language: any = {
  chinese: zh,
  english: en,
};

export interface II18N {
    key: string,
    defaultValue?: string,
    language?: string,
}

export default class I18N {
  public static get(props: II18N): string {
    const path: any = language[Global.CurrentLanguage] || en;
    const value: string = path[props.key];
    const result: string = value || props.defaultValue || props.key;
    return result;
  }
}
