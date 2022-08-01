import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickAnswerComponent } from './pick-answer.component';

describe('PickAnswerComponent', () => {
  let component: PickAnswerComponent;
  let fixture: ComponentFixture<PickAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
