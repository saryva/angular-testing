import { TitleCasePipe } from './title-case.pipe';

describe('TitleCasePipe', () => {
  it('create an instance', () => {
    const pipe = new TitleCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('text should be', () => {
    expect(new TitleCasePipe().transform('test')).toEqual('Test');
  });

  it('text should be empty', () => {
    expect(new TitleCasePipe().transform(null)).toEqual('');
  });
});
