import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDetailesComponent } from './students-detailes.component';

describe('StudentsDetailesComponent', () => {
  let component: StudentsDetailesComponent;
  let fixture: ComponentFixture<StudentsDetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsDetailesComponent]
    });
    fixture = TestBed.createComponent(StudentsDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
