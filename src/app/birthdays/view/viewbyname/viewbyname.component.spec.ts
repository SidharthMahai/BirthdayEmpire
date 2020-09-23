import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbynameComponent } from './viewbyname.component';

describe('ViewbynameComponent', () => {
  let component: ViewbynameComponent;
  let fixture: ComponentFixture<ViewbynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
