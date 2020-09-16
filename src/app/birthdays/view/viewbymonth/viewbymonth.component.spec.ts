import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbymonthComponent } from './viewbymonth.component';

describe('ViewbymonthComponent', () => {
  let component: ViewbymonthComponent;
  let fixture: ComponentFixture<ViewbymonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbymonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbymonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
