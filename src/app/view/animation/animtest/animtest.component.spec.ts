import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimtestComponent } from './animtest.component';

describe('AnimtestComponent', () => {
  let component: AnimtestComponent;
  let fixture: ComponentFixture<AnimtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
