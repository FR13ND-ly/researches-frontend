import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { languages, selectedLanguage, selectedLanguageIndex, selectedLanguagePack } from '../../utils/language-pack';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { Dialog } from '@angular/cdk/dialog';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive, MatIcon, LanguageSelectorComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  dialog = inject(Dialog)
  selectedLanguagePack = selectedLanguagePack;

  onSearch() {
    this.dialog.open(SearchDialogComponent, {
      backdropClass: 'search-backdrop',
    });
  }
}
