import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablerxjxComponent } from './observablerxjx.component';

describe('ObservablerxjxComponent', () => {
  let component: ObservablerxjxComponent;
  let fixture: ComponentFixture<ObservablerxjxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablerxjxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablerxjxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
