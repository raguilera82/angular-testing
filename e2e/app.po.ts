import { browser, element, by } from 'protractor';

export class AngularTestingPage {
  navigateTo() {
    return browser.get('/');
  }

  setUsername(username: string) {
    element(by.id('username')).sendKeys(username);
  }

  clickSearchButton() {
    element(by.id('search')).click();
  }

  getLoginText() {
    return element(by.css('#login')).getText();
  }

  getErrorText() {
    return element(by.css('#error')).getText();
  }
}
