import { FormatMarkdownToHtmlPipe } from './format-markdown-to-html-pipe';

describe('FormatMarkdownToHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatMarkdownToHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
