import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackQueueComponent } from './stack-queue.component';

describe('StackComponent', () => {
  let component: StackQueueComponent;
  let fixture: ComponentFixture<StackQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
