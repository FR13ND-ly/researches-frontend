import { Dialog } from '@angular/cdk/dialog';
import { Component, inject, input, OnInit } from '@angular/core';
import { selectedLanguagePack } from '../../utils/language-pack';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { CategoryPipe } from '../../pipes/category.pipe';

@Component({
  selector: 'category-header',
  imports: [RouterLink, RouterLinkActive, MatIcon, LanguageSelectorComponent, CategoryPipe],
  templateUrl: './category-header.component.html',
  styleUrl: './category-header.component.scss'
})
export class CategoryHeaderComponent implements OnInit {
  category: any = input();
  link: any = '' 
  dialog = inject(Dialog)
  selectedLanguagePack = selectedLanguagePack;

  ngOnInit() {
    this.link = this.category()!.replace('_', '-').toLowerCase();
  }

  onSearch() {
    this.dialog.open(SearchDialogComponent, {
      backdropClass: 'search-backdrop',
      data: {
        category: this.category(),
      }
    });
  }
}
