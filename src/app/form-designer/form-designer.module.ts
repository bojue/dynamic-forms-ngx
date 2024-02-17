import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormEditorPluginLibComponent } from './form-editor-plugin-lib/form-editor-plugin-lib.component';
import { FormEditorPluginSettingComponent } from './form-editor-plugin-setting/form-editor-plugin-setting.component';
import { FormsModule } from '@angular/forms';
import { FormDesignerRoutingModule } from './form-designer-routing.module';
import { DragulaModule } from 'ng2-dragula';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    FormEditorComponent,
    FormEditorPluginLibComponent,
    FormEditorPluginSettingComponent,
  ],
  imports: [
    FormDesignerRoutingModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    DragulaModule
  ]
})
export class FormDesignerModule { }
