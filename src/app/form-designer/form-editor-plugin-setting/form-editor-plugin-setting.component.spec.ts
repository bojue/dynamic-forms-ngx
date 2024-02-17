import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorPluginSettingComponent } from './form-editor-plugin-setting.component';

describe('FormEditorPluginSettingComponent', () => {
  let component: FormEditorPluginSettingComponent;
  let fixture: ComponentFixture<FormEditorPluginSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditorPluginSettingComponent]
    });
    fixture = TestBed.createComponent(FormEditorPluginSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
