import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallBackHellComponent } from './call-back-hell.component';

describe('CallBackHellComponent', () => {
  let component: CallBackHellComponent;
  let fixture: ComponentFixture<CallBackHellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallBackHellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallBackHellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
