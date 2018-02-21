import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPopapPerfilEsComponent } from './menu-popap-perfil-es.component';

describe('MenuPopapPerfilEsComponent', () => {
  let component: MenuPopapPerfilEsComponent;
  let fixture: ComponentFixture<MenuPopapPerfilEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPopapPerfilEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPopapPerfilEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
