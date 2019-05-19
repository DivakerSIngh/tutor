import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BecomeExpertComponent } from './become-expert/become-expert.component';


const commonpageRoutes: Routes = [
    { path:'', redirectTo:'home', component:HomeComponent },    
    { path:'home',  component:HomeComponent },
    { path:'become-a-expert',  component:BecomeExpertComponent },
    // { path:'study-group', component:StudyGroupComponent },
    // { path:'bulletin-board', component:BulletinBoardComponent },
    // { path:'forgot/:id', component:ForgotPasswordComponent },
   
]

@NgModule({
  imports: [
    //StudentModule,
    RouterModule.forChild(commonpageRoutes)
  ],
  declarations: []
})
export class CommonPageRouterModule {}
