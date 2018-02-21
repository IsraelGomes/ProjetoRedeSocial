import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJpComponent } from './home-jp.component';

describe('HomeJpComponent', () => {
  let component: HomeJpComponent;
  let fixture: ComponentFixture<HomeJpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeJpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
