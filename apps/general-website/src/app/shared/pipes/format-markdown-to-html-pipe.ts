import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({
  name: 'formatMarkdownToHtml',
})
export class FormatMarkdownToHtmlPipe implements PipeTransform {
  transform(value: any): any {
    return marked.parse(value);
  }
}
