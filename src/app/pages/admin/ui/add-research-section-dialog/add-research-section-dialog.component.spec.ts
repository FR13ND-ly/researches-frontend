import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResearchSectionDialogComponent } from './add-research-section-dialog.component';

describe('AddResearchSectionDialogComponent', () => {
  let component: AddResearchSectionDialogComponent;
  let fixture: ComponentFixture<AddResearchSectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddResearchSectionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResearchSectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
