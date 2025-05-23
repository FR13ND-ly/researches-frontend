import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesWrapperComponent } from './issues-wrapper.component';

describe('IssuesWrapperComponent', () => {
  let component: IssuesWrapperComponent;
  let fixture: ComponentFixture<IssuesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuesWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
