import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/common-pages/login/login.component';
// import { NotFoundComponent } from './modules/commonpages/not-found/not-found.component';

const appRoutes: Routes = [   
   
  {path:'login', component:LoginComponent}
    // {path:'', loadChildren:'./modules/commonpages/commonpages.module#CommonpagesModule'},
    // {path:'teacher', loadChildren:'./modules/teacher/teacher.module#TeacherModule'},
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
