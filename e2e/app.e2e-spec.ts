import { CreatingAComponentPage } from './app.po';

describe('creating-a-component App', () => {
  let page: CreatingAComponentPage;

  beforeEach(() => {
    page = new CreatingAComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
