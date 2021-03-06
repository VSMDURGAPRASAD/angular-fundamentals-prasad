import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayDataInTemplateComponent } from './display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateUrlComponent } from './display-data-in-template-url/display-data-in-template-url.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { HeroBioComponent } from './hero-bio/hero-bio.component';
import { DisplayHeroComponent } from './display-hero/display-hero.component';



@NgModule({
  declarations: [DisplayDataInTemplateComponent, DisplayDataInTemplateUrlComponent, TemplateSyntaxComponent, HeroDetailComponent, CustomEventsComponent, TwoWayBindingComponent, HeroBioComponent, DisplayHeroComponent],
  imports: [
    CommonModule,
     FormsModule 

  ]
})
export class ComponentsTemplatesModule { }
