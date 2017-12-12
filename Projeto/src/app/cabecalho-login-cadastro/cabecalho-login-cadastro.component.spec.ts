/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CabecalhoLoginCadastroComponent } from './cabecalho-login-cadastro.component';

describe('CabecalhoLoginCadastroComponent', () => {
  let component: CabecalhoLoginCadastroComponent;
  let fixture: ComponentFixture<CabecalhoLoginCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabecalhoLoginCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoLoginCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
