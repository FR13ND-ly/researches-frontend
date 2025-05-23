import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguisticsComponent } from './linguistic.component';

describe('LinguisticsComponent', () => {
  let component: LinguisticsComponent;
  let fixture: ComponentFixture<LinguisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinguisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinguisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
