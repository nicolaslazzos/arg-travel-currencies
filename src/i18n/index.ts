import { I18n } from "i18n-js";
import { NativeModules, Platform } from 'react-native';

import translations from './translations';

class i18n {
  private static instance: I18n;

  public static init() {
    if (i18n.instance) return i18n.instance;

    let locale: string = 'en';

    if (Platform.OS == 'android') {
      locale = NativeModules.I18nManager.localeIdentifier;
    } else if (Platform.OS == 'ios') {
      locale = NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0];
    }

    i18n.instance = new I18n(translations);
    i18n.instance.defaultLocale = 'en';
    i18n.instance.locale = locale.replace('_', '-').split('-')[0];

    return i18n.instance;
  }
}

export default i18n.init()


