import { RenosheetsPage } from './app.po';

describe('renosheets App', () => {
  let page: RenosheetsPage;

  beforeEach(() => {
    page = new RenosheetsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
