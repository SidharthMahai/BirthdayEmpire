import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaybirthdaysComponent } from './todaybirthdays.component';

describe('TodaybirthdaysComponent', () => {
  let component: TodaybirthdaysComponent;
  let fixture: ComponentFixture<TodaybirthdaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaybirthdaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaybirthdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
