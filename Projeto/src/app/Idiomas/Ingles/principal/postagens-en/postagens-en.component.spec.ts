import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagensEnComponent } from './postagens-en.component';

describe('PostagensEnComponent', () => {
  let component: PostagensEnComponent;
  let fixture: ComponentFixture<PostagensEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostagensEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagensEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
