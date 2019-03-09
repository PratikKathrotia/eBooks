import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  private avoidableWords: string[] = [
    'and', 'of', 'from', 'to', 'for'
  ];

  transform(str: string): string {
    if (str && typeof str === 'string') {
      return str.split(' ').map(word => {
        if (this.avoidableWords.includes(word.toLowerCase())) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      }).join(' ');
    }
    return str;
  }

}
