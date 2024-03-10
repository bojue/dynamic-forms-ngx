import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorContainerComponent } from './form-editor-container.component';

describe('FormEditorContainerComponent', () => {
  let component: FormEditorContainerComponent;
  let fixture: ComponentFixture<FormEditorContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditorContainerComponent]
    });
    fixture = TestBed.createComponent(FormEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
