import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ProjectsWorkedOnComponent } from './components/projects-worked-on/projects-worked-on.component';

const routes: Routes = [
  {path:'about',
  component:AboutComponent},

  {path:'contact',
  component:ContactMeComponent},
  
  {path:'projectslist',
  component:ProjectsWorkedOnComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
