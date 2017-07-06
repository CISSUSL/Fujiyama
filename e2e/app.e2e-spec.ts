import { FujiyamaPage } from './app.po';

describe('fujiyama App', () => {
  let page: FujiyamaPage;

  beforeEach(() => {
    page = new FujiyamaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
