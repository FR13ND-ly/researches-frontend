import { Pipe, PipeTransform } from '@angular/core';
import { selectedLanguagePack } from '../utils/language-pack';

@Pipe({
  name: 'categoryName'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string | undefined {
    const categories = selectedLanguagePack().categories;
    return categories[value as keyof typeof categories];
  }

}
