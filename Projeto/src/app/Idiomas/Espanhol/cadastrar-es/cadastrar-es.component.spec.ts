import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEsComponent } from './cadastrar-es.component';

describe('CadastrarEsComponent', () => {
  let component: CadastrarEsComponent;
  let fixture: ComponentFixture<CadastrarEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
