import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListUserComponent } from './cart-list-user.component';

describe('CartListUserComponent', () => {
  let component: CartListUserComponent;
  let fixture: ComponentFixture<CartListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartListUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
