import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPaperComponent } from './past-paper.component';

describe('PastPaperComponent', () => {
  let component: PastPaperComponent;
  let fixture: ComponentFixture<PastPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastPaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
