import { ClientFinalProjectPage } from './app.po';

describe('client-final-project App', () => {
  let page: ClientFinalProjectPage;

  beforeEach(() => {
    page = new ClientFinalProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
