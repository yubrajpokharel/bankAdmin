import { BankAdminPage } from './app.po';

describe('bank-admin App', function() {
  let page: BankAdminPage;

  beforeEach(() => {
    page = new BankAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
