import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResitrationComponent } from './resitration.component';

describe('ResitrationComponent', () => {
  let component: ResitrationComponent;
  let fixture: ComponentFixture<ResitrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResitrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResitrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
