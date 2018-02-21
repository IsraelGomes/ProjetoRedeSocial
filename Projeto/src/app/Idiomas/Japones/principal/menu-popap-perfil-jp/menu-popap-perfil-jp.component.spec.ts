import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPopapPerfilJpComponent } from './menu-popap-perfil-jp.component';

describe('MenuPopapPerfilJpComponent', () => {
  let component: MenuPopapPerfilJpComponent;
  let fixture: ComponentFixture<MenuPopapPerfilJpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPopapPerfilJpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPopapPerfilJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
