import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {DisplayDataInTemplateComponent} from './components-templates/display-data-in-template/display-data-in-template.component';
import {DisplayDataInTemplateUrlComponent} from './components-templates/display-data-in-template-url/display-data-in-template-url.component';


const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'components-templates/display-data-in-template',component:DisplayDataInTemplateComponent},
  {path:'components-templates/display-data-in-template-url',component:DisplayDataInTemplateUrlComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
