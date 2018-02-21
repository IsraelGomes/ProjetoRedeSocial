import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagensEsComponent } from './postagens-es.component';

describe('PostagensEsComponent', () => {
  let component: PostagensEsComponent;
  let fixture: ComponentFixture<PostagensEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostagensEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagensEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
