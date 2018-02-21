import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigosOnlineEnComponent } from './amigos-online-en.component';

describe('AmigosOnlineEnComponent', () => {
  let component: AmigosOnlineEnComponent;
  let fixture: ComponentFixture<AmigosOnlineEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmigosOnlineEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmigosOnlineEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
