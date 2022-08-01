import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAndQuizesComponent } from './test-and-quizes.component';

describe('TestAndQuizesComponent', () => {
  let component: TestAndQuizesComponent;
  let fixture: ComponentFixture<TestAndQuizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAndQuizesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestAndQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
