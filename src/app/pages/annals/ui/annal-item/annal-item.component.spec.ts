import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnalItemComponent } from './annal-item.component';

describe('AnnalItemComponent', () => {
  let component: AnnalItemComponent;
  let fixture: ComponentFixture<AnnalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnalItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
