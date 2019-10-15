import { TitleCasePipe } from './title-case.pipe';

fdescribe('TitleCasePipe', () => {
  it('create an instance', () => {
    const pipe = new TitleCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('text should be', () => {
    expect(new TitleCasePipe().transform('test')).toEqual('Test');
  });
});
