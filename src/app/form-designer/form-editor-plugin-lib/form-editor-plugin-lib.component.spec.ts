import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorPluginLibComponent } from './form-editor-plugin-lib.component';

describe('FormEditorPluginLibComponent', () => {
  let component: FormEditorPluginLibComponent;
  let fixture: ComponentFixture<FormEditorPluginLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditorPluginLibComponent]
    });
    fixture = TestBed.createComponent(FormEditorPluginLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
