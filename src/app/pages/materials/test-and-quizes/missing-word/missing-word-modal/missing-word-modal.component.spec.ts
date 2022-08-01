import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingWordModalComponent } from './missing-word-modal.component';

describe('MissingWordModalComponent', () => {
  let component: MissingWordModalComponent;
  let fixture: ComponentFixture<MissingWordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingWordModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissingWordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
