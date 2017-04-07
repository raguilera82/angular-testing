import { AngularTestingPage } from './app.po';
import { browser } from 'protractor';

describe('angular-testing App', () => {
  let page: AngularTestingPage;

  beforeEach(() => {
    page = new AngularTestingPage();
    page.navigateTo();
  });

  it('should show user login', () => {
    const username = 'raguilera82';
    page.setUsername(username);
    page.clickSearchButton();
    expect(page.getLoginText()).toEqual('Login: ' + username);
  });

  it('should show error', () => {
    const username = 'notfound';
    page.setUsername(username);
    page.clickSearchButton();
    expect(page.getErrorText()).toContain('Not Found');
  });

  afterEach(() => {
    browser.driver.sleep(3000);
  });

});
