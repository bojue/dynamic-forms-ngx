import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormEditorPluginLibComponent } from './form-editor-plugin-lib/form-editor-plugin-lib.component';
import { FormEditorPluginSettingComponent } from './form-editor-plugin-setting/form-editor-plugin-setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDesignerRoutingModule } from './form-designer-routing.module';
import { DragulaModule } from 'ng2-dragula';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFromComponent } from './reactive-from/reactive-from.component';
import { ButtonComponent } from './form-editor-plugin-lib/button/button.component';
import { InputComponent } from './form-editor-plugin-lib/input/input.component';
import { TextareaComponent } from './form-editor-plugin-lib/textarea/textarea.component';
import { SelectComponent } from './form-editor-plugin-lib/select/select.component';
import { ContentComponent } from './form-editor-plugin-lib/content/content.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { FuncitonComponent } from './funciton/funciton.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormEditorContainerComponent } from './form-editor-container/form-editor-container.component';

@NgModule({
  declarations: [
    FormEditorComponent,
    FormEditorPluginLibComponent,
    FormEditorPluginSettingComponent,
    ReactiveFromComponent,
    ButtonComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    ContentComponent,
    NgContentComponent,
    FuncitonComponent,
    FormContainerComponent,
    FormEditorContainerComponent,
  ],
  imports: [
    FormDesignerRoutingModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    DragulaModule,
    ReactiveFormsModule
  ]
})
export class FormDesignerModule { }
