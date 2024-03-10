import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { ReactiveFromComponent } from './reactive-from/reactive-from.component';
import { ContentComponent } from './form-editor-plugin-lib/content/content.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { FuncitonComponent } from './funciton/funciton.component';
import { FormContainerComponent } from './form-container/form-container.component';

const routes: Routes = [{
  path: '',
  component: FormEditorComponent
},{
  path: 'reactive-from',
  component: ReactiveFromComponent
},{
  path: 'content',
  component: NgContentComponent
}, {
  path: 'function',
  component: FuncitonComponent
}, {
  path: 'container',
  component: FormContainerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FormDesignerRoutingModule { }
