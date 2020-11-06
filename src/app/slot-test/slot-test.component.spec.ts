import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotTestComponent } from './slot-test.component';

describe('SlotTestComponent', () => {
  let component: SlotTestComponent;
  let fixture: ComponentFixture<SlotTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
