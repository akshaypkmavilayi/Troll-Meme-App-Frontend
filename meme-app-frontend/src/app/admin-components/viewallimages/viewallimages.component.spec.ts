import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallimagesComponent } from './viewallimages.component';

describe('ViewallimagesComponent', () => {
  let component: ViewallimagesComponent;
  let fixture: ComponentFixture<ViewallimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallimagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
