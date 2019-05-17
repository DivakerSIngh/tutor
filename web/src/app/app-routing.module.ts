import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/common-pages/login/login.component';
import { SignupComponent } from './modules/common-pages/signup/signup.component';
// import { NotFoundComponent } from './modules/commonpages/not-found/not-found.component';

const appRoutes: Routes = [   
  {path:'', loadChildren:'./modules/common-pages/common-pages.module#CommonPagesModule'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
    // {path:'', loadChildren:'./modules/commonpages/commonpages.module#CommonpagesModule'},
  {path:'learner', loadChildren:'./modules/learner/learner.module#LearnerModule'},
    // {path:'student', loadChildren:'./modules/student/student.module#StudentModule'},
    // { path:'**',  component:NotFoundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: []
})
export class AppRoutingModule {}
