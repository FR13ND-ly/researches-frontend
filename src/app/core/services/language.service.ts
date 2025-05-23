import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { selectedLanguageIndex } from '../utils/language-pack';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  loadLanguage(): Promise<void> {
    let platformId = inject(PLATFORM_ID);
  
    if (!isPlatformBrowser(platformId)) {
      selectedLanguageIndex.set(0);
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      const storedIndex = localStorage.getItem('selectedLanguageIndex');
      if (storedIndex !== null) {
        selectedLanguageIndex.set(parseInt(storedIndex));
      } else {
        selectedLanguageIndex.set(0);
      }
      resolve();
    });
  }

  get languageIndex(): number | null {
    return selectedLanguageIndex();
  }
}
