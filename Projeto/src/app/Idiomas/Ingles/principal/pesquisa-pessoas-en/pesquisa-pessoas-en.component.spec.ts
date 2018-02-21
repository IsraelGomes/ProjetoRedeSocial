import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaPessoasEnComponent } from './pesquisa-pessoas-en.component';

describe('PesquisaPessoasEnComponent', () => {
  let component: PesquisaPessoasEnComponent;
  let fixture: ComponentFixture<PesquisaPessoasEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaPessoasEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaPessoasEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
