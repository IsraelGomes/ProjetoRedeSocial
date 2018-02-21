import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagensJpComponent } from './postagens-jp.component';

describe('PostagensJpComponent', () => {
  let component: PostagensJpComponent;
  let fixture: ComponentFixture<PostagensJpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostagensJpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagensJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
