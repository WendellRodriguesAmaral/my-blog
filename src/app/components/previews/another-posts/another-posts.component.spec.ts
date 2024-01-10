import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherPostsComponent } from './another-posts.component';

describe('AnotherPostsComponent', () => {
  let component: AnotherPostsComponent;
  let fixture: ComponentFixture<AnotherPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
