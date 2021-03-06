import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';

import {DisplayDataInTemplateComponent} from './components-templates/display-data-in-template/display-data-in-template.component';
import {DisplayDataInTemplateUrlComponent} from './components-templates/display-data-in-template-url/display-data-in-template-url.component';
import {TemplateSyntaxComponent} from './components-templates/template-syntax/template-syntax.component';
import {CustomEventsComponent} from './components-templates/custom-events/custom-events.component';
import { TwoWayBindingComponent } from './components-templates/two-way-binding/two-way-binding.component';


const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'components-templates/display-data-in-template',component:DisplayDataInTemplateComponent},
  {path:'components-templates/display-data-in-template-url',component:DisplayDataInTemplateUrlComponent},
  { path: 'components-templates/template-syntax', component:  TemplateSyntaxComponent },
  { path: 'components-templates/template-syntax/custom-events', component:  CustomEventsComponent },
  { path: 'components-templates/template-syntax/two-way-binding', component:  TwoWayBindingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
