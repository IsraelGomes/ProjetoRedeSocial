import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEsComponent } from './login-es.component';

describe('LoginEsComponent', () => {
  let component: LoginEsComponent;
  let fixture: ComponentFixture<LoginEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
