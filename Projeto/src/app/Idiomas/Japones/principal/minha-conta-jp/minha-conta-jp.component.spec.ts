import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaContaJpComponent } from './minha-conta-jp.component';

describe('MinhaContaJpComponent', () => {
  let component: MinhaContaJpComponent;
  let fixture: ComponentFixture<MinhaContaJpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaContaJpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaContaJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
