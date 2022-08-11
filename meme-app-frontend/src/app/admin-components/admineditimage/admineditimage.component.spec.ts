import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditimageComponent } from './admineditimage.component';

describe('AdmineditimageComponent', () => {
  let component: AdmineditimageComponent;
  let fixture: ComponentFixture<AdmineditimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
