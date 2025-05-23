import { Component } from '@angular/core';
import { languages, selectedLanguage, selectedLanguageIndex, selectedLanguagePack } from '../../utils/language-pack';

@Component({
    selector: 'language-selector',
    imports: [],
    templateUrl: './language-selector.component.html',
    styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {
  languagePack = selectedLanguagePack;
  languages = [...languages];
  selectedLanguageIndex = selectedLanguageIndex;
  selectedLanguage = selectedLanguage;

  onChangeLanguagePack(option: any) {
    const selectedLanguageIndex = parseInt(option);
    this.selectedLanguageIndex.set(parseInt(option));
    localStorage.setItem(
      'selectedLanguageIndex',
      selectedLanguageIndex.toString()
    );
  }
}
