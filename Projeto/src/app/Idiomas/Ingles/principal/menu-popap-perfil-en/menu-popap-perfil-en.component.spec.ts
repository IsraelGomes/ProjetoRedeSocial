import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPopapPerfilEnComponent } from './menu-popap-perfil-en.component';

describe('MenuPopapPerfilEnComponent', () => {
  let component: MenuPopapPerfilEnComponent;
  let fixture: ComponentFixture<MenuPopapPerfilEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPopapPerfilEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPopapPerfilEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
