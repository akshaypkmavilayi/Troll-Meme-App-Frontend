import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemesofactorsComponent } from './memesofactors.component';

describe('MemesofactorsComponent', () => {
  let component: MemesofactorsComponent;
  let fixture: ComponentFixture<MemesofactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemesofactorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemesofactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
