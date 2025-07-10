import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagerment } from './user-managerment';

describe('UserManagerment', () => {
  let component: UserManagerment;
  let fixture: ComponentFixture<UserManagerment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserManagerment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManagerment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
