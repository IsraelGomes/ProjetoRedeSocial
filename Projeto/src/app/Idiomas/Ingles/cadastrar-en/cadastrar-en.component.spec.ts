import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEnComponent } from './cadastrar-en.component';

describe('CadastrarEnComponent', () => {
  let component: CadastrarEnComponent;
  let fixture: ComponentFixture<CadastrarEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
