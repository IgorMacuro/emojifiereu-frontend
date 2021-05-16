import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojifyComponent } from './emojify.component';

describe('EmojifyComponent', () => {
  let component: EmojifyComponent;
  let fixture: ComponentFixture<EmojifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
