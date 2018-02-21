import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaContaEnComponent } from './minha-conta-en.component';

describe('MinhaContaEnComponent', () => {
  let component: MinhaContaEnComponent;
  let fixture: ComponentFixture<MinhaContaEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaContaEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaContaEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
