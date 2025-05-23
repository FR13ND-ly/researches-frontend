import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchEditorDialogComponent } from './research-editor-dialog.component';

describe('ResearchEditorDialogComponent', () => {
  let component: ResearchEditorDialogComponent;
  let fixture: ComponentFixture<ResearchEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchEditorDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
