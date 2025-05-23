import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchesSectionComponent } from './researches-section.component';

describe('ResearchesSectionComponent', () => {
  let component: ResearchesSectionComponent;
  let fixture: ComponentFixture<ResearchesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
