import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpMaangerment } from './exp-maangerment';

describe('ExpMaangerment', () => {
  let component: ExpMaangerment;
  let fixture: ComponentFixture<ExpMaangerment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpMaangerment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpMaangerment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
