import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpertListComponent } from './expert-list/expert-list.component';

const routes: Routes = [
  //{ path:'', redirectTo:'list', component:ExpertListComponent },    
  { path:'list',  component:ExpertListComponent },
 
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnerRoutingModule { }
