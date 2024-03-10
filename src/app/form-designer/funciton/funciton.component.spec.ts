import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncitonComponent } from './funciton.component';

describe('FuncitonComponent', () => {
  let component: FuncitonComponent;
  let fixture: ComponentFixture<FuncitonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncitonComponent]
    });
    fixture = TestBed.createComponent(FuncitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
