import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/common-pages/login/login.component';
import { SignupComponent } from './modules/common-pages/signup/signup.component';
import { LearnerLayoutComponent } from './modules/shared/learner-layout/learner-layout.component';
import { ExpertLayoutComponent } from './modules/shared/expert-layout/expert-layout.component';
// import { NotFoundComponent } from './modules/commonpages/not-found/not-found.component';

const appRoutes: Routes = [   
  {path:'',component:LearnerLayoutComponent, loadChildren:'./modules/common-pages/common-pages.module#CommonPagesModule'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'expert',component:ExpertLayoutComponent, loadChildren:'./modules/expert/expert.module#ExpertModule'},  
  {path:'learner',component:LearnerLayoutComponent, loadChildren:'./modules/learner/learner.module#LearnerModule'},
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
