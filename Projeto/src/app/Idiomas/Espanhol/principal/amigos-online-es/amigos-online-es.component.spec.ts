import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigosOnlineEsComponent } from './amigos-online-es.component';

describe('AmigosOnlineEsComponent', () => {
  let component: AmigosOnlineEsComponent;
  let fixture: ComponentFixture<AmigosOnlineEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmigosOnlineEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmigosOnlineEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
