import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsModalComponent } from './tutorials-modal.component';

describe('TutorialsModalComponent', () => {
  let component: TutorialsModalComponent;
  let fixture: ComponentFixture<TutorialsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
