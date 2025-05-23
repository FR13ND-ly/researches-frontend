import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignLiteratureComponent } from './foreign-literature.component';

describe('ForeignLiteratureComponent', () => {
  let component: ForeignLiteratureComponent;
  let fixture: ComponentFixture<ForeignLiteratureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForeignLiteratureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignLiteratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
