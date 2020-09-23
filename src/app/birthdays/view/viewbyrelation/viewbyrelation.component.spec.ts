import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbyrelationComponent } from './viewbyrelation.component';

describe('ViewbyrelationComponent', () => {
  let component: ViewbyrelationComponent;
  let fixture: ComponentFixture<ViewbyrelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbyrelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbyrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
