import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDetailsDialogComponent } from './research-details-dialog.component';

describe('ResearchDetailsDialogComponent', () => {
  let component: ResearchDetailsDialogComponent;
  let fixture: ComponentFixture<ResearchDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchDetailsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
