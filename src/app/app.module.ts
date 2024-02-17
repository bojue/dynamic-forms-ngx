import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDesignerModule } from './form-designer/form-designer.module';
import { DragulaModule } from 'ng2-dragula'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragulaModule.forRoot(),
    FormDesignerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    
  ]
})
export class AppModule { }
