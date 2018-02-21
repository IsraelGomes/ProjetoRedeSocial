import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarJpComponent } from './cadastrar-jp.component';

describe('CadastrarJpComponent', () => {
  let component: CadastrarJpComponent;
  let fixture: ComponentFixture<CadastrarJpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarJpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
