import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaPessoasJpComponent } from './pesquisa-pessoas-jp.component';

describe('PesquisaPessoasJpComponent', () => {
  let component: PesquisaPessoasJpComponent;
  let fixture: ComponentFixture<PesquisaPessoasJpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaPessoasJpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaPessoasJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
