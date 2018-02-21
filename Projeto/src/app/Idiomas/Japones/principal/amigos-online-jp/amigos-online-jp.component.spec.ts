import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigosOnlineJpComponent } from './amigos-online-jp.component';

describe('AmigosOnlineJpComponent', () => {
  let component: AmigosOnlineJpComponent;
  let fixture: ComponentFixture<AmigosOnlineJpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmigosOnlineJpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmigosOnlineJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
