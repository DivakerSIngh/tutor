import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExpertFilterComponent } from './expert-filter/expert-filter.component';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSelectModule} from '@angular/material';
import { LearnerProfileLeftbarComponent } from './learner-profile-leftbar/learner-profile-leftbar.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LearnerLayoutComponent } from './learner-layout/learner-layout.component';
import { ExpertLayoutComponent } from './expert-layout/expert-layout.component';
import { ExpertViewLeftSidemenuComponent } from './expert-view/expert-view-left-sidemenu/expert-view-left-sidemenu.component';


@NgModule({
  declarations: [FooterComponent
    ,ExpertFilterComponent,
     LearnerProfileLeftbarComponent, ChangePasswordComponent,LearnerLayoutComponent,ExpertLayoutComponent,HeaderComponent
     ,ExpertViewLeftSidemenuComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSelectModule
  ],
  exports: [
    ExpertViewLeftSidemenuComponent,HeaderComponent, FooterComponent,ExpertFilterComponent,LearnerProfileLeftbarComponent,ChangePasswordComponent,LearnerLayoutComponent,ExpertLayoutComponent
  ]
})
export class SharedModule { }
