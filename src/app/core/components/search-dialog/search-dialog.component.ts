import { Component, inject, OnInit, signal } from '@angular/core';
import { MaterialModule } from '../../utils/material.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, filter, map, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { ResearchesService } from '../../services/researches.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ResearchDetailsDialogComponent } from '../research-details-dialog/research-details-dialog.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { ResearchItemComponent } from '../research-item/research-item.component';
import { IssueItemComponent } from '../issue-item/issue-item.component';

@Component({
  selector: 'app-search-dialog',
  imports: [MaterialModule, ReactiveFormsModule, AsyncPipe, NgIf, MatProgressSpinner, ResearchItemComponent, IssueItemComponent],
  templateUrl: './search-dialog.component.html',
  styleUrl: './search-dialog.component.scss',
})
export class SearchDialogComponent implements OnInit {
  researchService = inject(ResearchesService);
  fb = inject(FormBuilder);
  dialog = inject(MatDialog);
  route = inject(ActivatedRoute);

  category: any = ''

  ngOnInit(): void {
    const validSections = ["literature", "linguistic", "foreign_literature"];
    const firstSegment = window.location.pathname.split("/")[1].replace('-', "_");
    if (validSections.includes(firstSegment)) {
      this.category = firstSegment;
    }
  }
  
  searchForm = this.fb.group({
    search: [''],
  });

  $loading = signal(false);

  notEmpty$: Observable<any> = this.searchForm.get('search')!.valueChanges.pipe(
    map((value: string | null) => value && value.length > 0)
  );
  
  results$: Observable<any> = this.searchForm.get('search')!.valueChanges.pipe(
    switchMap((value: string | null) => {
      if (value && value.length > 0) {
        this.$loading.set(true);
        console.log('a', this.category)
        return this.researchService.search(value, this.category).pipe(
          delay(300),
          tap(results => {
            this.$loading.set(false);
          })
        );
      }
      return of([]);
    })
  ) ?? new Observable<any>()

  onOpenDetails(research: any) {
    this.dialog.open(ResearchDetailsDialogComponent, { data: research });
  }
}