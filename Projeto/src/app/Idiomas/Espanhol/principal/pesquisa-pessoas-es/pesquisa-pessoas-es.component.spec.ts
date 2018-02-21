import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaPessoasEsComponent } from './pesquisa-pessoas-es.component';

describe('PesquisaPessoasEsComponent', () => {
  let component: PesquisaPessoasEsComponent;
  let fixture: ComponentFixture<PesquisaPessoasEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaPessoasEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaPessoasEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
