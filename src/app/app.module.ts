import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDesignerModule } from './form-designer/form-designer.module';
import { DragulaModule } from 'ng2-dragula'
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './form-designer/form-editor-plugin-lib/button/button.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragulaModule.forRoot(),
    FormDesignerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    
  ]
})
export class AppModule { }
