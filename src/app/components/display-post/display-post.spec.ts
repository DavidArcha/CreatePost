import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPost } from './display-post';

describe('DisplayPost', () => {
  let component: DisplayPost;
  let fixture: ComponentFixture<DisplayPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayPost],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayPost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
