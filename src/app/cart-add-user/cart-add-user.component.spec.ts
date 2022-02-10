import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAddUserComponent } from './cart-add-user.component';

describe('CartAddUserComponent', () => {
  let component: CartAddUserComponent;
  let fixture: ComponentFixture<CartAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartAddUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
