import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaContaEsComponent } from './minha-conta-es.component';

describe('MinhaContaEsComponent', () => {
  let component: MinhaContaEsComponent;
  let fixture: ComponentFixture<MinhaContaEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaContaEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaContaEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
