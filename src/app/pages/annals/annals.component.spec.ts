import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnalsComponent } from './annals.component';

describe('AnnalsComponent', () => {
  let component: AnnalsComponent;
  let fixture: ComponentFixture<AnnalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
