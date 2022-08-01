import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutInCorrectComponent } from './put-in-correct.component';

describe('PutInCorrectComponent', () => {
  let component: PutInCorrectComponent;
  let fixture: ComponentFixture<PutInCorrectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutInCorrectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutInCorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
