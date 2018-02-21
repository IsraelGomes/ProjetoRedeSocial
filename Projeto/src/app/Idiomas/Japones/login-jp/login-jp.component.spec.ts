import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginJpComponent } from './login-jp.component';

describe('LoginJpComponent', () => {
  let component: LoginJpComponent;
  let fixture: ComponentFixture<LoginJpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginJpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
